import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Vendors } from 'src/Tabels/tabels-list';
import { VendorsService } from '../Service/vendors.service';
import { VendorModalPage } from './vendor-modal/vendor-modal.page';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {
  regform =this.fb.group({});
  usePicker: boolean;
  listOfvendors$: Observable<Vendors[]>
  listOfvendors: Vendors[];
  filteredVendors: Vendors[];
  vendorId: string;
  VocherNo:string='0';
  searchText:string;
  //paging declaration
  page = 1;
  count = 0;
  tableSize = 5;
  currentIndex = -1;
  editMode: boolean=false;
  lengthOfVendor: number;
  listOfVendor: Vendors[];
  public segment: string = "list";
  //public data={};
  constructor(private fb:FormBuilder,private platform:Platform,
    private vendorService:VendorsService,private alertController:AlertController,
    private modalController:ModalController
   ) {
    }
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
    this.getVendor();
    this.readVoucherId();
   if((this.platform.is('mobile') && !this.platform.is('hybrid')) || 
     this.platform.is('desktop')
   ) {
     this.usePicker = true;
   }}
   openModal(){
    this.modalController.create({component:VendorModalPage,
      cssClass: 'my-custom'}).then((modelElement)=>{
      modelElement.present();
    })
   }
 
   readVoucherId()
   {
     let No=0;
     this.vendorService.getAllVendor().subscribe(result=>{
      if(result.length==0)
       No=1;
       else
       No=result.length+1;
       this.VocherNo="VN-"+this.VocherNo.padStart(4, '0') +No;
     })
   }
   getVendor(){
     try{
      this.vendorService.getAllVendor().subscribe(result=>{ 
        this.lengthOfVendor=result.length;
       
      if(result.length>0){
        this.listOfvendors=result;
        this.filteredVendors=result;
      }
      else
      {
      this.AlertInternet();
      }
      });
     }
    catch(error){
      console.log(error);
    }
   }
   async AlertInternet(){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Internet',
      message:'Please trun on data or wifi',
      buttons:['ok']
    });
    await alert.present();
   }
  SaveVender(){
  if(this.regform.valid){
    if(!this.vendorId){
      this.vendorService.create(this.regform.value);
    }
    else{
      this.vendorService.updateVendor(this.regform.value,this.vendorId);
    }
    this.regform.reset();
    this.vendorId="";
    this.presentAlert("Add Vendor Sucessfully");
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
  filter(query){
    this.filteredVendors = (query.target.value) ? 
    this.listOfvendors.filter(p => p.vendorName.toLowerCase().includes(query.target.value.toLowerCase())) :
    this.listOfvendors;
  }
  async update(item:Vendors) {
    const modal = await this.modalController.create({
      component: VendorModalPage,
      componentProps: {
        data: item
      }
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
     //console.log('Sending: ',item);
    });
  }
  viewVendors(item:string){
     
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  delete(item:Vendors){
   this.presentAlertConfirm(item);
  }
  async presentAlertConfirm(item :Vendors) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Are you sure you want delete?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
          this.vendorService.removeVendor(item.id);
         this.regform.reset();
         this.vendorId=null;
          }
        }
      ]
    });
 
    await alert.present();
  }
  //paging function
  onTableDataChange(event){
    this.page = event;
    this.getVendor();
  }  

  // onTableSizeChange(event): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.getVendor();
  // } 
}
