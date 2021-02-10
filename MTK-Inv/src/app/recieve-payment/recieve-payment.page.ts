import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { balance, Customer, Vocher } from 'src/Tabels/tabels-list';
import { CustomerService } from '../Service/customer.service';
import { AppError } from "../common/app-error";
import { BadInput } from "../common/bad-input";
import { BalanceService } from '../Service/balance.service';
import { VocherService } from '../Service/vocher.service';
@Component({
  selector: 'app-recieve-payment',
  templateUrl: './recieve-payment.page.html',
  styleUrls: ['./recieve-payment.page.scss'],
})
export class RecievePaymentPage implements OnInit {
  regform = this.fb.group({});
  listOfCustomer: Customer[];
  defaultSelectedCurrency: string;
  filterCustomer: Customer[];
  selectedCustomerBalance: number;
  updateBalance: number;
  recieveBalanceId: string;
  listOfBalance: balance[];
  id: any;
  Balance: number;
  listOfVoucher: Vocher[];
  customerId: string;
  totalBalance: number;
  balance: number;
  constructor(private fb: FormBuilder,
              private customerService:CustomerService,
              private alertController:AlertController,
              private balanceService:BalanceService,
              private voucherService:VocherService) { }
  ngOnInit() {
    this.regform=this.fb.group({
      customer:["" ,Validators.required],
      payment:["", Validators.required],
      updateBalance:0
    })
    this.getAllCustomerList();
    //this.getVoucherById();
  }
  public fields: Object = { text: "phonenumber", value: "fullname" };
  public watermark2: string = "Select Customer";
  public height: string = "250px";
 
  getDisplayExpr(item) {
    if (!item) {
      return "";
    }
    return item.fullname + " " + item.phonenumber;
  }
  getAllCustomerList(){
    this.customerService.getAllCustomer().subscribe(res=>{
      this.listOfCustomer=res;
     this.defaultSelectedCurrency = this.listOfCustomer[0].id;
     this.customerId = this.defaultSelectedCurrency;
     if(this.customerId!==null){
      this.voucherService.getVocherByCustomerID(this.customerId).subscribe(res=>{
        this.listOfVoucher = res;
      } )
    }
   })
  }
  getVoucherById(customerId:string){
    this.totalBalance=0;this.balance=0;
    if(this.customerId!==null){
      this.voucherService.getVocherByCustomerID(customerId).subscribe(res=>{
        this.listOfVoucher = res;
        if(res.length==0){
          this.balance = this.updateBalance;
        }
        else{
          this.listOfVoucher.forEach(element => {
            this.totalBalance = +this.totalBalance + element.subTotal
            this.balance = this.totalBalance+this.updateBalance;
           });
        }
        //console.log(res)
      } )
    }
   
  }
  onKey(){
    this.Balance= this.updateBalance + this.totalBalance - this.regform.get("payment").value;
     }
  SelectedValue($event){
    const newValue = $event.value;
    const previousValue = $event.previousValue;
    this.id = newValue || previousValue;
    this.filterCustomer = this.listOfCustomer.filter(c=>c.id == this.id);
      this.selectedCustomerBalance = this.filterCustomer[0].balance;
      this.updateBalance = this.selectedCustomerBalance;
      this.customerId = this.filterCustomer[0].id;
      this.getVoucherById(this.customerId);
  }
  
  reCalculateBalance(){
    {
      if(this.regform.valid)
      {
        if(!this.recieveBalanceId)
        { 
          let updateCustomerData ={
            fullname:this.filterCustomer[0].fullname,
            phonenumber:this.filterCustomer[0].phonenumber,
            location:this.filterCustomer[0].location,
            balance:this.updateBalance-this.regform.get("payment").value,
            address:this.filterCustomer[0].address
           }
           this.customerService.updateCustomer(updateCustomerData,this.defaultSelectedCurrency).then(
            () =>
            (error: AppError) => {
              if (error instanceof BadInput) {
              this.regform.setErrors(error.originalError);
              }
              else throw error;
            }
          );
        }
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
       header: 'Recive payment',
       // subHeader: 'Subtitle',
       message: message,
       buttons: ['OK']
     });
     await alert.present();
   }
}
