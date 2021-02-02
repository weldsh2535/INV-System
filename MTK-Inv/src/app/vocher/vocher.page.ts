import { IdSettingService } from "./../Service/id-setting.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { Customer, ItemCategory, Items, LineItem, Lookup, Vendors } from "src/Tabels/tabels-list";
import { BalanceService } from "../Service/balance.service";
import { ItemCategoryService } from "../Service/item-category.service";
import { ItemsService } from "../Service/items.service";
import { LineItemsService } from "../Service/line-items.service";
import { LookupService } from "../Service/lookup.service";
import { VocherService } from "../Service/vocher.service";
import { VoucherTransationService } from "../Service/voucher-transation.service";
import { SharedService } from "../Service/shared.service";
import { AppError } from "../common/app-error";
import { BadInput } from "../common/bad-input";
import { VendorsService } from "../Service/vendors.service";
import { CustomerService } from "../Service/customer.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { PaymentDetailsPage } from "../payment-details/payment-details.page";
import { EventHandlerVars } from "@angular/compiler/src/compiler_util/expression_converter";
@Component({
  selector: "app-vocher",
  templateUrl: "./vocher.page.html",
  styleUrls: ["./vocher.page.scss"],
})
export class VocherPage implements OnInit {
  regform = this.fb.group({});
  ListOfItemCategory: ItemCategory[];
  listoflookup: Lookup[];
  listofItems: Items[];
  listofStore: Lookup[];
  FilterLookup: Lookup[];
  currentDate = new Date().toDateString();
  selectedDate = new Date().toISOString();
  minDate = new Date().toISOString();
  maxDate = new Date().toISOString();
  VocherNo: string = "0";
  Your_String: string;
  ListOfItems: any[] = [];
  SubTotal: number = 0;
  TaxAmount: number = 0;
  values:number;
  balance: {
    itemId: any;
    vocherId: string;
    beginingAmount: number;
    currentAmount: number;
    storeId: any;
    customer:any,
    vendor:any,
  };
  vocherTransation: {
    ItemID: any;
    vocherId: string;
    fromStoreId: any;
    toStoreId: any;
    amount: any;
    customer:any,
    vendor:any,
  };
  FilterItems: Items[];
  Id: any;
  vocherId: string;
  formData: LineItem;
  itemList: Items[];
  Price: number;
  FilterItemCatagory: ItemCategory[];
  FilterItem: Items;
  Filter: Items;
  discrption: Items[];
  name: Items[];
  picture: Items[];
  selectedEmployee: any;
  filteredItemCategory: ItemCategory[];
  linename: Items[];
  Quantity: number;
  grandTotalVendor:number=0;
  grandTotalCustomer:number=0;
  VoucherName: string;
  FromStore: boolean = true;
  ToStore: boolean = true;
  vendors:boolean=true;
  customers:boolean=true;
  defaultSelectedCurrency: string;
  prefix: string;
  searchText: string;
  //paging declaration
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];
  currentIndex = -1;
  VoucherId: string;
  vouchertype: Lookup[];
  LookUpId: string;
  LookUpName: string;
  id: Items[];
  SelectedDiv: boolean = true;
  index: number;
  item: string;
  Index: number;
  listOfVendor: Vendors[];
  listOfCustomer: Customer[];
  defaultSelectedVendor: string;
  defaultSelectedFromStored: string;
  defaultSelectedToStored: string;
  filterCustomer: Customer[];
  selectedCustomerBalance: number;
  customerBalance: boolean=false;
  vendorsBalance: boolean=false;
  vendor:boolean=false;
  grandTotalLabel:boolean=false;
  grandTotalVendorLabel: boolean=false;
  paid: number=0;
  paidForm = this.fb.group({});
  grandTotalUpdate: number=0;
  SubTotalGrandTotal: number=0;
  TaxAmountGrandTotal: number=0;
  GrandTotal: number=0;
  reloadiv: boolean = true;
  updateBalance: number;
  previousTotal: number;
  settingGrandTotal: number=0;
  x: number=0;
  Balance: number=0;
  filterVendor: Vendors[];
  vendorBalance: number;
  filterCustomerB: Customer[];
  filterVendorB: Vendors[];
  vendorBalanceList: number;
  customerBalanceList: number;
  isValid: boolean = true;
  receivedChildMessage: string;
  listOfVendorBalance: any;
  listOfVendorB: Vendors[];
  vendorB: number;
  constructor(
    private fb: FormBuilder,
    private lookupService: LookupService,
    private itemsService: ItemsService,
    private itemCategoryService: ItemCategoryService,
    private vocherService: VocherService,
    private balanceService: BalanceService,
    private voucherTranationService: VoucherTransationService,
    private lineItemService: LineItemsService,
    private sharedService: SharedService,
    private idSettingService: IdSettingService,
    private alertController: AlertController,
    private vendorService:VendorsService,
    private customerService:CustomerService,
    private dialog: MatDialog,
  ) {
    //setting min date
    let date:Date =new Date();
    date.setDate(date.getDate()-5);
    this.minDate=date.toISOString();
    //setting max date
    date =new Date();
    date.setDate(date.getDate() +5);
    this.maxDate =date.toISOString();
   }
  voucherTypeID: string;
  ngOnInit() {
    this.paidForm = this.fb.group({ paid:0, values:0,totalAmount:[""]})
    this.regform = this.fb.group({
      date: ["", Validators.required],
      item: ["", Validators.required],
      Quantity: 1,
      Price: ["", Validators.required],
      fromStore: [""],
      toStore: [""],
       vendor:[""],
      customer:[""],
      updateBalance:0,
      vendorBalance:0
     });
    this.getSettingForm();
    this.getItemCategory();
    this.getLookUp();
    this.getItemList();
    this.getAllVendorList();
    this.getAllCustomerList();
    this.getStoreById();
    this.getBalance();
    //this.reloadiv = true;
    this.sharedService.balance.subscribe(res=>{
      this.paid=res.paymnetBalance;
      this.values=res.updateBalance;
      console.log(this.paid)
    })
  }
  public fields: Object = { text: "name", value: "name" };
  public watermark2: string = "Select Item";
  public field: Object = { text: "name", value: "name" };
  public height: string = "250px";
  public watermark: string = "Select an Items";
  readVoucherId() {
    let No = 0;
    this.vocherService.getAllVocher().subscribe((result) => {
      if (result.length == 0) No = 1;
      else No = result.length + 1;
      this.VocherNo = "SL-" + this.VocherNo.padStart(4, "0") + No;
    });
  }
  getSettingForm(){
      this.sharedService.VoucherTypeId.subscribe((res) => {
      this.voucherTypeID = res.id;
      this.VoucherName = res.name;
      this.VoucherId = res.id;
      this.VocherNo = "";
      this.idSettingService.getIDSetting(this.voucherTypeID).subscribe((Result) => {
          //let id = +Result[0].currentId + 1;//vocherTypeId
          let id=0;
          this.vocherService.getVocherTypId(Result[0].prefix).subscribe((result)=>{
            if(result.length == 0) id=1;
            else id=result.length+1;
            this.VocherNo = "0";
            let padStart=this.VocherNo.padStart(Result[0].length, "0");
            let suffix=Result[0].suffix;
            let prefix=Result[0].prefix;
            this.VocherNo = prefix + "-" +padStart +id +"-" + suffix;
            this.prefix = Result[0].prefix;
          if (this.VoucherName == "Sale order") {
            this.ToStore = false;
            this.regform.get("toStore").reset();
            this.FromStore = true;
            this.customers = true;
            this.vendors=false;
            this.regform.get("updateBalance").reset();
            this.regform.get("vendorBalance").reset();
            this.paidForm.get("values").reset();
            this.paidForm.get("totalAmount").reset();
            this.vendorsBalance = false;
            this.ListOfItems=[];
           } else if (this.VoucherName == "Cash Sales") {
            this.ToStore = false;
            this.regform.get("toStore").reset();
            this.FromStore = true;
            this.customers = true;
            this.vendors=false;
            this.regform.get("updateBalance").reset();
            this.regform.get("vendorBalance").reset();
            this.paidForm.get("values").reset();
            this.paidForm.get("totalAmount").reset();
            this.vendorsBalance = false;
            this.ListOfItems=[];
          } else if (this.VoucherName == "Purchase order") {
            this.FromStore = false;
            this.regform.get("fromStore").reset();
            this.ToStore = true;
            this.customers = false;
            this.vendors=true;
            this.vendor=true;
            this.regform.get("updateBalance").reset();
            this.regform.get("vendorBalance").reset();
            this.paidForm.get("values").reset();
            this.paidForm.get("totalAmount").reset();
            this.customerBalance = false;
            this.ListOfItems=[];
          } else if (this.VoucherName == "Good Recieve") {
            this.FromStore = false;
            this.regform.get("fromStore").reset();
            this.vendors = true;
            this.ToStore = true;
            this.customers = false;
            this.vendors=true;  
            this.vendor=true;
            this.customerBalance = false;
            this.regform.get("updateBalance").reset();
            this.regform.get("vendorBalance").reset();
            this.paidForm.get("values").reset();
            this.paidForm.get("totalAmount").reset();
            this.ListOfItems=[];
          }
        });
        });
    });
  }
  filter(query) {
    this.filteredItemCategory = query.target.value? this.ListOfItemCategory.filter((p) =>
        p.categoryName
          .toLowerCase()
          .includes(query.target.value.toLowerCase())
      )
      : this.ListOfItemCategory;
  }
  getDisplayExpr(item) {
    if (!item) {
      return "";
    }
    return item.name + " " + item.discrption;
  }
  getDisplayCustomer(item) {
    if (!item) {
      return "";
    }
    return item.fullname + " " + item.phonenumber;
  }
  getDisplayVendor(item){
    if (!item) {
      return "";
    }
    return item.vendorName + " " + item.phonenumber; 
  }
  getDisplayStore(item){
    if (!item) {
      return "";
    }
    return item.name ; 
  }
  SelectedVendorValue(event){
    this.vendorsBalance = true;
    this.customerBalance = false;
    const newValue = event.value;
    const previousValue = event.previousValue;
    this.id = newValue || previousValue;
    this.filterVendor = this.listOfVendor.filter(c=> c.id == event.value);
    if(this.id == newValue){
      this.vendorBalance = parseFloat(this.filterVendor[0].balance);
      this.defaultSelectedVendor=this.filterVendor[0].id
    }
     else{
       this.regform.get("vendor").reset();
     }
  }
  SelectedCustomerValue(event){
    this.customerBalance =true;
    this.vendorsBalance = false;
    this.vendor=false;
    const newValue = event.value;
    const previousValue = event.previousValue;
    this.id = newValue || previousValue;
    this.filterCustomer = this.listOfCustomer.filter(c=>c.id == event.value);
    if(this.id == newValue){
      this.selectedCustomerBalance = this.filterCustomer[0].balance;
      this.defaultSelectedCurrency = this.filterCustomer[0].id;
      this.updateBalance = this.selectedCustomerBalance;
    }
    else{
      this.regform.get("customer").reset();
    }
  }
 
  valueChanged($event) {
    const previousValue = $event.previousValue;
    const newValue = $event.value;
    this.id = newValue || previousValue;
    this.linename = this.listofItems.filter((c) => c.id == ($event.value || $event.previousValue));
    let Q=1
    this.Quantity = Q;
    let p = this.linename[0].price;
    this.Price = p;
    if (this.id == newValue) {
      this.linename[0].picture = this.linename[0].picture;
      this.linename[0].discrption = this.linename[0].discrption;
      this.linename[0].name = this.linename[0].name;
      this.SelectedDiv = true;
    } else {
      this.linename[0] = null;
      this.SelectedDiv = false;
    }
  }
  getItemCategory() {
    // try {
    this.itemCategoryService.getAllItemCategories().subscribe((result) => {
      this.ListOfItemCategory = result;
      let store = result.find(
        (c) => c.categoryName == this.regform.get("catagory")
      );
      if (store) {
        this.getLookupById(store.id);
      }
    });
    // }
  }
  getBalance(){
    const a = this.vocherService.calcBalance(this.Balance);
    //console.log(a);
  }
  getLookupById(id: string) {
    this.lookupService.getLookUpByType(id).subscribe((result) => {
      this.listoflookup = result;
    });
  }
  getStoreById() {
    this.lookupService.getLookUpByType("x1m0C0g3LcBv3pVmtdbf").subscribe((result) => {
      this.listofStore = result;
      this.defaultSelectedFromStored = this.listofStore[0].id;
      this.defaultSelectedToStored = this.listofStore[0].id;
    });
  }
  getAllVendorList(){
    this.vendorService.getAllVendor().subscribe(res=>{
      this.listOfVendor=res;
    //  this.defaultSelectedVendor = this.listOfVendor[0].id;
    });
  }
  getAllCustomerList(){
    this.customerService.getAllCustomer().subscribe(res=>{
      this.listOfCustomer=res;
    // this.defaultSelectedCurrency = this.listOfCustomer[0].id;
   })
  }
  getLookUp() {
    try {
      this.lookupService.getAllLookUp().subscribe((result) => {
        if (result.length > 0) {
          this.listoflookup = result;
        } else {
          // this.AlertInternet();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  getItemList() {
    this.itemsService.getAllItem().subscribe((result) => {
      this.listofItems = result;
    });
  }
  validateForm(formData: LineItem) {
    this.isValid = true;
    if (formData.Price == 0)
      this.isValid = false;
    else if (formData.Quantity == 0)
      this.isValid = false;
    return this.isValid;
  }
  Save() {
    if (this.regform.valid) {
      let value = {
        voucherId: this.VocherNo,
        ItemName: this.listofItems.find((c) => c.id == this.regform.get("item").value).name,
        Quantity: this.regform.get("Quantity").value,
        Price: this.regform.get("Price").value,
        Total:this.regform.get("Quantity").value * this.regform.get("Price").value,
        item: this.regform.get("item").value,
        toStore: this.regform.get("toStore").value,
        fromStore: this.regform.get("fromStore").value,
        vendor:this.regform.get("vendor").value,
        customer:this.regform.get("customer").value
      };
      if (!(this.index || this.index == 0)) {
        this.SubTotal +=this.regform.get("Quantity").value * this.regform.get("Price").value;
        this.ListOfItems.push(value);
        this.updateBalanceGrandTotal();
      } else {
        this.index = this.ListOfItems.findIndex((x) => x.item === value.item);
        this.removeRowIndex(this.index);
        this.index = null;
        this.ListOfItems.push(value);
        this.updateBalanceGrandTotal();
      }
      this.regform.get("item").reset();
      this.regform.get("Price").reset();
      this.regform.get("Quantity").reset();
    } else {
      this.ErrorAlert();
    }
  }
  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Error",
      message: "Please Enter All field.",
      buttons: ["OK"],
    });
    await alert.present();
  }
  UpdateRow(item) {
    this.index = this.ListOfItems.findIndex((x) => x.item === item.item);
    this.regform.get("date").setValue(this.regform.value);
    this.regform.get("item").setValue(item.item);
    this.regform.get("Quantity").setValue(item.Quantity);
    this.regform.get("Price").setValue(item.Price);
    this.regform.get("fromStore").setValue(item.fromStore);
    this.regform.get("toStore").setValue(item.toStore);
    this.regform.get("customer").setValue(item.customer);
    this.regform.get("vendor").setValue(item.vendor);
  }
  onKey(){
    if(this.vendor==true)
    this.selectedCustomerBalance=this.vendorBalanceList;
    else 
    this.selectedCustomerBalance=this.customerBalanceList;
    this.values = parseFloat((this.selectedCustomerBalance-this.paid).toFixed(2));
     }
  updateBalanceGrandTotal(){
    let customerB=this.selectedCustomerBalance;
    let vendorB=this.vendorBalance
    //vendor balance
    if(this.vendor==true){
      this.vendorBalanceList=this.ListOfItems.reduce((prev,curr)=>{
        return prev +curr.Total;
       },0);
       this.vendorBalanceList=parseFloat(this.vendorBalanceList.toFixed(2));
       this.grandTotalVendor=this.vendorBalanceList;
       this.vendorBalanceList=vendorB+parseFloat(this.grandTotalVendor.toFixed(2));
       this.values=parseFloat(this.vendorBalanceList.toFixed(2));
       }
     //customer balance 
   else{
    this.customerBalanceList=this.ListOfItems.reduce((prev,curr)=>{
      return prev +curr.Total;
     },0);
     this.customerBalanceList=parseFloat(this.customerBalanceList.toFixed(2));
     this.grandTotalCustomer=this.customerBalanceList;
     this.customerBalanceList=customerB+parseFloat(this.grandTotalCustomer.toFixed(2));
     this.values=parseFloat(this.customerBalanceList.toFixed(2)); 
   }
  }
  Send() {
    let lengthOfListOfItems=this.ListOfItems.length;
    let storeValidition=this.regform.get("fromStore").value || this.regform.get("toStore").value ;
    if(!(lengthOfListOfItems==0) && storeValidition !== null && storeValidition !==""){
    this.ListOfItems.forEach((element) => {
      //to insert data in line item table
      let LineItem = {
        vocherId: this.VocherNo,
        ItemID: element.item,
        Quantity: element.Quantity,
        taxAmount: 0,
        Price: element.Price,
        subTotal: element.Total,
        customer:element.customer,
        vendor:element.vendor
      };
      if (this.VocherNo||this.regform.valid) {
        this.lineItemService.create(LineItem).then(() => (error: AppError) => {
          if (error instanceof BadInput) {
            this.regform.setErrors(error.originalError);
          } else throw error;
        });
      } else {
        this.ErrorAlert();
      }
      //to insert data in balance table
      let curent = 0;
      this.itemsService.getBalanceByItemId(element.item).subscribe((result) => {
        if (result.length > 0) {
          curent = result[0].currentAmount - element.Quantity;
        } else {
          curent = curent - element.Quantity;
        }
        this.balance = {
          itemId: element.item,
          vocherId: this.VocherNo,
          beginingAmount: element.Price,
          currentAmount: curent,
          storeId: element.fromStore || element.toStore,
          customer:element.customer,
          vendor:element.vendor,
        };
        if (this.VocherNo||this.regform.valid) {
          this.balanceService.create(this.balance)
           .then(() => (error: AppError) => {
              if (error instanceof BadInput) {
                this.regform.setErrors(error.originalError);
              } else throw error;
            });
        } else {
          this.ErrorAlert();
        }
      });
      //to insert data in vouchertransaction table
      this.vocherTransation = {
        ItemID: element.item,
        vocherId: this.VocherNo,
        fromStoreId: element.fromStore,
        toStoreId: element.toStore,
        amount: element.Quantity,
        customer:element.customer,
        vendor:element.vendor,
      };
      if (this.VocherNo||this.regform.valid)
        this.voucherTranationService.create(this.vocherTransation);  
    });
     //to insert data in voucher table 
     let voucher = {
      vocherId: this.VocherNo,
      subTotal: this.SubTotal,
      taxAmount: 0,
      grandTotal: this.SubTotal + this.TaxAmount,
      date: this.currentDate,
      vocherTypeId: this.prefix, //(lookup)
      userId: this.regform.get("customer").value,
      vendor:this.regform.get("vendor").value,
    };
  this.getUpdateBalance();
  if (this.VocherNo||this.regform.valid) {
      this.vocherService.create(voucher).then(() => (error: AppError) => {
        if (error instanceof BadInput) {
          this.regform.setErrors(error.originalError);
        } else throw error;
      });
    } else {
      this.ErrorAlert();
    }
    this.ListOfItems = [];
    this.paidForm.reset();
    this.paidForm.get("totalAmount").reset();
    this.regform.get("vendor").reset();
    this.regform.get("customer").reset();
    this.customerBalance=false;
    this.vendorsBalance =false;
    this.presentAlert("Add " + this.VoucherName + " Sucessfuly");
  }
  else{
    this.ErrorAlert();
  }   
  }
  getUpdateBalance(){
    if(this.vendor==true){
      let updateVendorData ={
        address:this.filterVendor[0].address,
        phonenumber:this.filterVendor[0].phonenumber,
        contact:this.filterVendor[0].contact,
        balance:this.selectedCustomerBalance-this.paid,
        vendorName:this.filterVendor[0].vendorName,
        email:this.filterVendor[0].email,
        website:this.filterVendor[0].website
       }   
       this.vendorService.updateVendor(updateVendorData,this.defaultSelectedVendor).then(
         () =>
         (error: AppError) => {
           if (error instanceof BadInput) {
           this.regform.setErrors(error.originalError);
           }
           else throw error;
         }
       );
    }
    else{
      let updateCustomerData ={
        fullname:this.filterCustomer[0].fullname,
        phonenumber:this.filterCustomer[0].phonenumber,
        location:this.filterCustomer[0].location,
        balance:this.selectedCustomerBalance-this.paid,
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
  }
  removeRowIndex(index) {
    this.ListOfItems.splice(index, 1);
  }
  removeRow(index) {
    this.presentAlertConfirm(index);
  }
  async presentAlertConfirm(index) {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "<strong>Are you sure you want delete?</strong>",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "OK",
          handler: () => {
            //this.cd.detectChanges();
            //window.location.reload();
            this.ListOfItems.splice(index, 1);
            this.updateBalanceGrandTotal();
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: this.VoucherName,
      message: message,
      buttons: ["ok"],
    });
    await alert.present();
  }
  //paging function
  onTableDataChange(event) {
    this.page = event;
    this.ListOfItems;
  }
  payment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "370%";
    dialogConfig.height ="420px";
    dialogConfig.data = {selectCustomer:this.defaultSelectedCurrency,balance:this.values};
    this.dialog.open(PaymentDetailsPage, dialogConfig).afterClosed().subscribe(res => {
      let p = res;
     //console.log('Dialog result ',p);
    });
  }
 
}
