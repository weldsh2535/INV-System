import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Customer, Vocher } from 'src/Tabels/tabels-list';
import { CustomerService } from '../Service/customer.service';
import { SharedService } from '../Service/shared.service';
import { VocherService } from '../Service/vocher.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  listOfVoucher:Vocher[];
  regform=this.fb.group({});
  payment: number;
  listOfCustomer:Customer[];
  defaultSelectedCurrency: string;
  updateBalancePayment: any;
  paymentValue: any;
  @Input() public balance;
  @Input() public customerId;
  @Input() public vendorId;
  constructor( 
  private voucherService:VocherService,
  private modalController:ModalController,
  private sharedService: SharedService,
  private fb:FormBuilder,private customerService:CustomerService) { }
  
  ngOnInit() {
    this.regform=this.fb.group({
     date:["",Validators.required],
    payment:0
    })
    // console.log(this.balance);
    // console.log(this.customerId);
    // console.log(this.vendorId)
  //console.log(this.data.balance);
    this.updateBalancePayment=this.balance;
   this.getAllVoucher();
  }
 getAllVoucher(){
   if(this.vendorId!=null)
   {
    this.voucherService.getVocherByVendorID(this.vendorId).subscribe(res=>{
      this.listOfVoucher = res;
      //console.log(res)
    } )
   }
  else{
    this.voucherService.getVocherByCustomerID(this.customerId).subscribe(res=>{
      this.listOfVoucher = res;
      //console.log(res)
    } )
  }

 }
 updatePayment(){
   this.payment =parseFloat((this.regform.get("payment").value))
   this.updateBalancePayment=this.balance-this.payment;
 }
 close(){
  this.modalController.dismiss();
}
submitPayment() {
 let payment={ 
   updateBalance:this.updateBalancePayment,
   paymnetBalance:this.payment
}
  this.sharedService.balance.next(payment);
  this.modalController.dismiss();
}

}
