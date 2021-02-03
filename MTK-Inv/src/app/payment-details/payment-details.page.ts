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
  @Input() public data;
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
    console.log(this.balance);
    console.log(this.data);
  //console.log(this.data.balance);
    this.updateBalancePayment=this.balance;
   this.getAllVoucher();
  }
 getAllVoucher(){
   this.voucherService.getVocherByID(this.data).subscribe(res=>{
     this.listOfVoucher = res;
   } )
 }
 updatePayment(){
   this.payment =parseFloat((this.regform.get("payment").value))
   this.updateBalancePayment=this.balance-this.payment;
 }
 close(){
  this.modalController.dismiss();
}
getAllCustomerList(){
  this.customerService.getAllCustomer().subscribe(res=>{
    this.listOfCustomer=res;
   this.defaultSelectedCurrency = this.listOfCustomer[0].id;
 })
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
