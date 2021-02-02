import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Vendors } from 'src/Tabels/tabels-list';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { VendorsService } from '../Service/vendors.service';
import { VocherService } from '../Service/vocher.service';

@Component({
  selector: 'app-pay-supplier',
  templateUrl: './pay-supplier.page.html',
  styleUrls: ['./pay-supplier.page.scss'],
})
export class PaySupplierPage implements OnInit {

  regform = this.fb.group({});
  defaultSelectedCurrency: string;
  selectedVendorBalance: any;
  updateBalance: number;
  recieveBalanceId: string;
  listOfVonder: Vendors[];
  filterVendor:Vendors[];
  listOfVoucher: any;
  listOfVoucherVendor: any;
  totalBalance: number;
  remainderBalance: number;
  id: any;
  constructor(private fb: FormBuilder,
              private vonderService:VendorsService,
              private alertController:AlertController,private voucherService:VocherService) { }

  ngOnInit() {
    this.regform=this.fb.group({
      vendor:["" ,Validators.required],
      payment:["", Validators.required],
      updateBalance:0
    })
    this.getAllCustomerList();
  }
  public fields: Object = { text: "vendorName", value: "vendorName" };
  public watermark2: string = "Select Vendor";
  public height: string = "250px";
 
  getDisplayExpr(item) {
    if (!item) {
      return "";
    }
    return item.vendorName + " " + item.phonenumber;
  }
  getAllCustomerList(){
    this.vonderService.getAllVendor().subscribe(res=>{
      this.listOfVonder=res;
     this.defaultSelectedCurrency = this.listOfVonder[0].id;
   })
  }
  SelectedValue($event){
    const newValue = $event.value;
    const previousValue = $event.previousValue;
    this.id = newValue || previousValue;
    this.filterVendor = this.listOfVonder.filter((c)=>c.id == this.id);
      this.selectedVendorBalance = this.filterVendor[0].balance;
      this.updateBalance = this.selectedVendorBalance;
      this. getVoucherByVendorId(this.defaultSelectedCurrency);
  }
  getVoucherByVendorId(defaultSelectedCurrency:string){
    this.totalBalance=0;
    this.listOfVoucherVendor = this.voucherService.getVocherVonderById(defaultSelectedCurrency).subscribe(res=>{
      this.listOfVoucher=res;
      this.listOfVoucher.forEach(element => {
       this.totalBalance=+this.totalBalance+element.subTotal
      });
    if(this.updateBalance>this.totalBalance){
      this.remainderBalance=0
    }
    else{
      this.remainderBalance=this.totalBalance-this.updateBalance
    }
    })
  }
  reCalculateBalance(){
    {
      if(this.regform.valid)
      {
        if(!this.recieveBalanceId)
        {
          let updateCustomerData ={
            vendorName:this.filterVendor[0].vendorName,
            email:this.filterVendor[0].email,
            phonenumber:this.filterVendor[0].phonenumber,
            contact:this.filterVendor[0].contact,
            balance:this.updateBalance+this.regform.get("payment").value,
            address:this.filterVendor[0].address,
            website:this.filterVendor[0].website
           }
           this.vonderService.updateVendor(updateCustomerData,this.defaultSelectedCurrency).then(
            () =>
            (error: AppError) => {
              if (error instanceof BadInput) {
              this.regform.setErrors(error.originalError);
              }
              else throw error;
            }
          );
        }
        // else{
        //  this.idSettingService.updateIdSetting(this.regform.value,this.IdSettingId)
        // }
        this.regform.reset();
        this.recieveBalanceId="";
        this.presentAlert(" Sucess");
      }
      else{
       this.presentAlert("Please enter all fields");
      }
    }
  }

    async presentAlert(message) {
     const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'pay Supplier',
       // subHeader: 'Subtitle',
       message: message,
       buttons: ['OK']
     });
     await alert.present();
   }
}
