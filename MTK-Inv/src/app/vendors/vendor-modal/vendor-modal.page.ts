import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { VendorsService } from 'src/app/Service/vendors.service';

@Component({
  selector: 'app-vendor-modal',
  templateUrl: './vendor-modal.page.html',
  styleUrls: ['./vendor-modal.page.scss'],
})
export class VendorModalPage implements OnInit {
  regform=this.fb.group({})
  vendorId: any;
  @Input() public data;
  itemList: any;
  editMode: boolean=false;
  constructor(private fb:FormBuilder,private vendorService:VendorsService,
              private alertController:AlertController,
              private modalController:ModalController) { }
  ngOnInit() {
    this.regform=this.fb.group({
      vendorName:['',Validators.required],
      phonenumber:['',Validators.compose([Validators.pattern("[0-9]*")])],
      contact:['',Validators.required],
      address:['',Validators.required],
      email:['',Validators.email],
      website:[''],
      balance:['',Validators.compose([Validators.required,Validators.pattern("[0-9]*")])]
    });
    if(this.data==null){
      this.itemList=null
    }else{
      this.editMode=true;
      this.itemList = Object.assign(this.data); 
      this.vendorId=this.itemList.id;
      this.regform.get("vendorName").setValue(this.itemList.vendorName);
      this.regform.get("phonenumber").setValue(this.itemList.phonenumber);
      this.regform.get("contact").setValue(this.itemList.contact);
      this.regform.get("address").setValue(this.itemList.address);
      this.regform.get("email").setValue(this.itemList.email);
      this.regform.get("website").setValue(this.itemList.website);
      this.regform.get("balance").setValue(this.itemList.balance);
    }
  }
  SaveVender(){
    if(this.regform.valid){
      if(!this.vendorId){
        this.vendorService.create(this.regform.value);
        this.presentAlert("Add Vendor Sucessfully");
        this.modalController.dismiss();
      }
      else{
        this.vendorService.updateVendor(this.regform.value,this.vendorId);
        this.presentAlert("Update Vendor Sucessfully");
        this.modalController.dismiss();
      }
      this.regform.reset();
      this.vendorId="";
      
    }
     else{
    this.presentAlert("Please enter all fields");
     }
    }
    async presentAlert(message){
     const alert = await this.alertController.create({
       cssClass:'my-custom-class',
       header:'Vendors',
       message:message,
       buttons:['ok']
     });
     await alert.present();
    }
    closeModal(){
    this.modalController.dismiss();
    }
}
