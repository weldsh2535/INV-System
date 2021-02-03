import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  @Input() public data;
  // @Output() messageToEmit = new EventEmitter<string>();
 
  constructor( 
    // @Inject(MAT_DIALOG_DATA) public data,
  // public dialogRef: MatDialogRef<PaymentDetailsPage>,
  private voucherService:VocherService,
  // public dialog: MatDialog, 
  private sharedService: SharedService,
  private fb:FormBuilder,private customerService:CustomerService) { }
  
  ngOnInit() {
    this.regform=this.fb.group({
     date:["",Validators.required],
    payment:0
    })
    console.log(this.data);
  //console.log(this.data.balance);
    this.updateBalancePayment=this.data;
   this.getAllVoucher();
  }
 getAllVoucher(){
   this.voucherService.getAllVocher().subscribe(res=>{
     this.listOfVoucher = res;
   } )
 }
 updatePayment(){
   this.payment =parseFloat((this.regform.get("payment").value))
   this.updateBalancePayment=this.data.balance-this.payment;
 }
 close(){
  // this.dialogRef.close();
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
  // this.dialogRef.close();
}

}
