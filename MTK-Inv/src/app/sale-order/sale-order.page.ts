import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { Customer, Items } from 'src/Tabels/tabels-list';
import { CustomerService } from '../Service/customer.service';
import { ItemsService } from '../Service/items.service';
import { SaleOrderService } from '../Service/sale-order.service';
@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.page.html',
  styleUrls: ['./sale-order.page.scss'],
})
export class SaleOrderPage implements OnInit {
   regform=this.fb.group({});
  listOfItems: Items[];
  listOfCustomer: Customer[];
  saleOrderId: string;
  usePicker: boolean;
  constructor(private fb:FormBuilder,private platform:Platform, 
    private itemsService:ItemsService,private customerService:CustomerService,
    private alertController:AlertController,private saleOrderService:SaleOrderService) { }

  ngOnInit() {
    this.regform=this.fb.group({
      saleOrderNumber:['',Validators.required],
      customerName:['',Validators.required],
      date:['',Validators.required],
      totalAmount:['',Validators.required],
      lineItems: this.fb.array([this.addLineItemsGroup()])
    });
    this.getCustomers();
    this.getItems();
    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || 
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }
  addLineItemsGroup() {
    return this.fb.group({
      itemCode: [null, Validators.required],
      quantity: [null, Validators.required],
      cost: [null, Validators.required],
      subTotal: [null]
    });
  }
  addLineItems() {
    this.addLineItemsArray.push(this.addLineItemsGroup());
  }
  removeLineOfItems(index) {
    this.addLineItemsArray.removeAt(index);
  }
  get addLineItemsArray() {
    const control = <FormArray>this.regform.get('lineItems');
    return control;
  }
  getItems(){
    try{
      this.itemsService.getAllItem().subscribe(result=>{
      if(result.length>0){
        this.listOfItems=result;
      }
      else{
        this.AlertInternet();
      }
      });
    }
    catch(error){
      console.log(error);
    }
  }
  getCustomers(){
    try{
      this.customerService.getAllCustomer().subscribe(result=>{
      if(result.length>0){
        this.listOfCustomer=result;
      }
      else{
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
  saveSaleOrder(){
    if(this.regform.valid){
      if(!this.saleOrderId){
        this.saleOrderService.create(this.regform.value);
      }
      else{
        this.saleOrderService.updateSaleOrder(this.regform.value,this.saleOrderId);
      }
      this.regform.reset();
      this.saleOrderId="";
      this.presentAlert("Add Purchase Sucessfully");
    }
     else{
    this.presentAlert("Please enter all fileds");
     }
  }
  async presentAlert(message){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Sale Order',
      message:message,
      buttons:['ok']
    });
    await alert.present();
   }
public fields2: Object = { text: 'fullname', value: 'fullname' };
public watermark2: string = 'Select Customer Information';
 public fields: Object = { text: 'name', value: 'name' };
 public height: string = '250px';
 public watermark: string = 'Select an Items';
}
