import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Items, LineItem } from 'src/Tabels/tabels-list';
import { ItemsService } from '../Service/items.service';
import { PurchaseService } from '../Service/purchase.service';

@Component({
  selector: 'app-line-items',
  templateUrl: './line-items.page.html',
  styleUrls: ['./line-items.page.scss'],
})
export class LineItemsPage implements OnInit {

  formData: LineItem;
  itemList: Items[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<LineItemsPage>,
    private itemService:ItemsService,
    private purchaseService: PurchaseService,
    public dialog: MatDialog) { }

  ngOnInit() {
    //this.purchaseService.getItemList().subscribe(res=>this.itemList=res as Items[]);
    this.itemService.getAllItem().subscribe(res => this.itemList = res as Items[]);
    if (this.data.orderItemIndex == null)
      this.formData = {
        LineItemID: null,
        OrderID: this.data.OrderID,
        ItemID: 0,
        vocherId:null,
        taxAmount:0,
        ItemName: '',
        Price: 0,
        Quantity: 0,
        subTotal: 0
      }
    else
      this.formData = Object.assign({}, this.purchaseService.orderItems[this.data.orderItemIndex]);
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
      this.formData.ItemName = '';
    }
    else {
      this.formData.Price = this.itemList[ctrl.selectedIndex - 1].price;
      this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].AmaricName;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.subTotal = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null)
        this.purchaseService.orderItems.push(form.value);
      else
        this.purchaseService.orderItems[this.data.orderItemIndex] = form.value;
      this.dialogRef.close();
    }
  }

  validateForm(formData: LineItem) {
    this.isValid = true;
    if (formData.ItemID == 0)
      this.isValid = false;
    else if (formData.Quantity == 0)
      this.isValid = false;
    return this.isValid;
  }
  close(){
    this.dialogRef.close();
  }
}
