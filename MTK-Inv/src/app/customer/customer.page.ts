import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Customer } from 'src/Tabels/tabels-list';
import { CustomerService } from '../Service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  regform=this.fb.group({});
  usePicker: boolean;
  ListOfCustomer: Customer[];
  filteredCustomer: Customer[];
  customerId: string;
  editMode: boolean=false;
  constructor(private fb:FormBuilder,
    private customerService:CustomerService,
    private platform: Platform,
  private alertController: AlertController) {}

  ngOnInit() {
    this.regform=this.fb.group({
      fullname:['',Validators.required],
      phonenumber:['',Validators.required],
      location:['',Validators.required],
      balance:['',Validators.required],
      address:['',Validators.required]
    });
    this. getCustomer();
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
   ) {
     this.usePicker = true;
   }
  }
  getCustomer()
  {
    try {
      this.customerService.getAllCustomer().subscribe(result=>{
       if(result.length>0)
       {
         this.ListOfCustomer =result;
         this.filteredCustomer=result;
       }
       else
       {
        this.AlertInternet();
       }
       
      }
      );
    }
    catch(error) {
     console.log(error);
    }

  }
  async AlertInternet() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Internet',
      // subHeader: 'Subtitle',
      message: 'Please turn on wifi or data',
      buttons: ['OK']
    });

    await alert.present();
  }
  SaveCustomer()
  {
    if(this.regform.valid)
    {
      if(!this.customerId)
      {
        this.customerService.create(this.regform.value);
      }
      else{
       this.customerService.updateCustomer(this.regform.value,this.customerId)
      }
      this.regform.reset();
      this.customerId="";
      this.presentAlert("Save Sucessfully");
    }
    else{
     this.presentAlert("Please enter all fields");
    }
  }
  async presentAlert(message) {
   const alert = await this.alertController.create({
     cssClass: 'my-custom-class',
     header: 'Customer',
     // subHeader: 'Subtitle',
     message: message,
     buttons: ['OK']
   });

   await alert.present();
 }
 filter(query) { 
     
  this.filteredCustomer = (query.target.value) ? this.ListOfCustomer.filter(p => p.fullname.toLowerCase().includes(query.target.value.toLowerCase())) :
  this.ListOfCustomer;
}
 Edit(item :Customer,slidingItem: IonItemSliding )
 {  this.editMode=true;
     this.customerId =item.id;
     this.regform.get('fullname').setValue(item.fullname);
     this.regform.get('phonenumber').setValue(item.phonenumber);
     this.regform.get('location').setValue(item.location);
     this.regform.get('address').setValue(item.address);
     this.regform.get('balance').setValue(item.balance);
     slidingItem.close();
 }
 delete(item :Customer,slidingItem: IonItemSliding )
 {
   this.presentAlertConfirm(item)
 }
 async presentAlertConfirm(item :Customer) {
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
         this.customerService.removeCategory(item.id);
        this.regform.reset();
        this.customerId=null;
         }
       }
     ]
   });

   await alert.present();
 }
}
