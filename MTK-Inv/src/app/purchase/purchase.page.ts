import { ToastrService } from 'ngx-toastr';
import { AlertController } from '@ionic/angular';
import { LineItemsService } from './../Service/line-items.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vendors, Purchase } from 'src/Tabels/tabels-list';
import { PurchaseService } from '../Service/purchase.service';
import { VendorsService } from '../Service/vendors.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemsPage } from '../line-items/line-items.page';
@Component({
  selector: 'ngbd-accordion-basic',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PurchasePage implements OnInit {
  @Input() Pur:any;
  vendorList:Vendors[];
  isValid: boolean = true;
  listOfPurchase:Purchase[];
  currentDate= new Date();
  constructor(public purchaseService: PurchaseService,
    private dialog: MatDialog,
    private vendorsService:VendorsService,
    private router: Router,
    private alertController: AlertController,
    private lineItemsService:LineItemsService,
    private currentRoute: ActivatedRoute,
    private ToastrService:ToastrService) { }
  ngOnInit() {
    let orderID = this.currentRoute.snapshot.paramMap.get('id');
    if (orderID == null)
      this.resetForm();
    else {
      //this.purchaseService.getPurchaseByID(parseInt(orderID)).then(res=>
        // {
        //   this.purchaseService.formData=res.result;;
        //   this.purchaseService.orderItems=res.lineItems;
        // });
      // this.purchaseService.getPurchase(parseInt(orderID)).subscribe(res => {
      //   this.purchaseService.formData = res.order;
      //   this.purchaseService.orderItems = res.orderDetails;
      // });
    }
    //from Asp.net core list data
   // this.purchaseService.getPurchaseList().subscribe(res=>this.listOfPurchase = res as Purchase[]);
    this.vendorsService. getAllVendor().subscribe(res => this.vendorList = res as Vendors[]);
  }
  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.purchaseService.formData = {
      OrderID: null,
      purchaseNumber: Math.floor(100000 + Math.random() * 900000).toString(),
      venderName: null,
      date: null,
      VendorId: 0,
      totalAmount: 0,
      type:null,
      DeletedOrderItemIDs: ''
    };
    this.purchaseService.orderItems = [];
  }
  AddOrEditOrderItem(orderItemIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(LineItemsPage, dialogConfig).afterClosed().subscribe(res => {
      console.log(res);
      this.updateGrandTotal();
    });
  }
  onDeleteOrderItem(orderItemID: number, i: number) {
    if (orderItemID != null)
      this.purchaseService.formData.DeletedOrderItemIDs += orderItemID + ",";
    this.purchaseService.orderItems.splice(i, 1);
    this.updateGrandTotal();
  }
  updateGrandTotal() {
    this.purchaseService.formData.totalAmount = this.purchaseService.orderItems.reduce((prev, curr) => {
      return prev + curr.subTotal;
    }, 0);
    this.purchaseService.formData.totalAmount = parseFloat(this.purchaseService.formData.totalAmount.toFixed(2));
  }
  validateForm() {
    this.isValid = true;
    if (this.purchaseService.formData.VendorId == 0)
      this.isValid = false;
    else if (this.purchaseService.orderItems.length == 0)
      this.isValid = false;
    return this.isValid;
  }
   onSubmit(){
     if(this.isValid){
      var purchaseList={
        OrderID:this.purchaseService.formData.OrderID,
        VendorId:this.purchaseService.formData.VendorId,
        purchaseNumber:this.purchaseService.formData.purchaseNumber,
        venderName:this.purchaseService.formData.venderName,
        date:this.purchaseService.formData.date,
        totalAmount:this.purchaseService.formData.totalAmount,
        type:this.purchaseService.formData.type,
        DeletedOrderItemIDs:this.purchaseService.formData.DeletedOrderItemIDs
       };
    //   // this.purchaseService.addPurchase(purchaseList).subscribe(res=>{
    //  alert(res.toString());
    //   });
       this.purchaseService.create(purchaseList);
       this.purchaseService.orderItems.forEach(element => {
        let LineItem={
        vocherId:this.purchaseService.formData.purchaseNumber,
         ItemID: element.ItemID,
         Quantity: element.Quantity,
         taxAmount:'0',
         Price:element.Price,
         subTotal:element.subTotal,
         ItemName:element.ItemName,
       }
      this.lineItemsService.create(LineItem);
       });
      // this.purchaseService.addPurchase().subscribe(res=>{
      //   this.resetForm();
      //   this.ToastrService.success('Submitted Successfully', 'Purchase.');
      //   this.router.navigate(['/orders-view']);
      // });
      this.presentAlert("Save Sucessfully")
     }
     this.router.navigate(['/orders-view']);
   }
   async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Purchase',
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // onSubmit(form: NgForm) {
  //  if (this.validateForm()) {
  //    this.purchaseService.saveOrUpdateOrder().subscribe(res => {
       
  //     this.resetForm();
  //      this.purchaseService.success('Submitted Successfully', 'Restaurent App.');
  //     // this.router.navigate(['/orders']);
  //   })
  //   }
  //  }
}
