import { LookupCatagoryService } from './../Service/lookup-catagory.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { CatagoryService } from '../Service/catagory.service';
import { Plugins,CameraSource,CameraResultType } from '@capacitor/core';
import { ItemCategory, Items, Lookup, LookupCatagory } from 'src/Tabels/tabels-list';
import { LookupService } from '../Service/lookup.service';
import { ItemsService } from '../Service/items.service';
import { ItemCategoryService } from '../Service/item-category.service';
import { BalanceService } from '../Service/balance.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  @ViewChild('filePicker', {static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  formdata:Items
  base64textString: string;
  usePicker = false;
  regform = this.fb.group({});
  itemId: string;
  ListOfItemCategory: ItemCategory[];
  filteredItemCategory: ItemCategory[];
  listoflookup: Lookup[];
  listofItems: Items[];
  filteredLookUp: Lookup[];
  listofStore: Lookup[];
  editMode: boolean=false;
  listOfLookUpCatagory: LookupCatagory[];
  filteredItems: Items[];
  filteredItemsSearch: Items[];
  searchText:string;
  SelectedCatagory: string;
  SelectedLookup: string;
  selectedStore: string;
  length: number;
  filteredItemsByLookup: Items[];
  itemLookupList: any;
  ItemId: string;
  res: any[];
  a: number;
   //paging declaration
   page = 1;
   count = 0;
   tableSize =5;
   tableSizes = [3, 6, 9, 12];
   currentIndex = -1;
  listOfItemsSelected: Items[];
  isValid: boolean=true;
  constructor(private fb : FormBuilder ,private platform: Platform ,
    private CategoryService: CatagoryService,
    private ItemCategoryService: ItemCategoryService,
   private alertController: AlertController,  
   private lookupService:LookupService, 
   private itemsService:ItemsService,
   private balanceService:BalanceService,
   private lookupCatagoryService:LookupCatagoryService
 ) { }
  ngOnInit() {
     this.regform =this.fb.group({
      name:['',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9 ]*")])],
      AmaricName:['',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]*")])],
      discrption:[''],
      CatagoryId:['',Validators.required],
      type:['',Validators.required],
      price:['',Validators.compose([Validators.required,Validators.pattern("[0-9]*")])],
      Quantity:['',Validators.compose([Validators.required,Validators.pattern("[0-9]*")])],
      storeid:['',Validators.required],
      brand:[''],
      picture:['',Validators.required],
      remark:['']
    });
    //as Asp.net database list
      //  this.itemsService.getItemList().then(res=>this.listofItems=res as Items[]);
    this.getAllItemCategory();
     this.getCategory();
     this.getLookUp();
    this.getItemList();
    this.getLookUpCatagory();
    this.getItemBySelectedLookup();
    this.getItemLookup();
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
   ) {
     this.usePicker = true;
   }
    }
    public fields: Object = { text: 'name', value: 'name' };
    public watermark2: string = 'Select Store';
    public height: string = '250px';
    SelectedValue(event){
     this.filteredLookUp=this.listoflookup.filter((c)=>c.type==event.target.value);
     this.itemsService.getItemByLookup(this.SelectedLookup).subscribe(res=>{
      this.filteredItemsByLookup=res;
    })
    }
    getDisplayExpr(item) {
      if(!item) {
          return "";
      }
      return item.name ;
    }
    getLookUpCatagory(){
      this.lookupCatagoryService.getAllLookupCatagory().subscribe(result=>{
        this.listOfLookUpCatagory=result;
        this.SelectedLookup = this.listOfLookUpCatagory[0].id
      })
    }
    getItemBySelectedLookup(){
      this.lookupCatagoryService.getAllLookupCatagory().subscribe(result=>{
        this.listOfLookUpCatagory=result;
        this.SelectedLookup = this.listOfLookUpCatagory[0].id
        // this.itemsService.getItemByLookup(this.SelectedLookup).subscribe(res=>{
        //   this.filteredItemsByLookup=res;
        // })
      })
    }
    getItemLookup(){
      this.lookupCatagoryService.getAllLookupCatagory().subscribe(res=>{
      let selectedLookup=this.listOfLookUpCatagory[0].id;
      if(selectedLookup==this.SelectedLookup){
      this.SelectedLookup=selectedLookup;
      this.itemsService.getItemByID(this.SelectedLookup).subscribe(res=>{
        this.listOfItemsSelected=res;
        this.itemLookupList=res[0].id;
      })
    }
      else{
        this.SelectedLookup=this.SelectedLookup
        this.itemsService.getItemByID(this.SelectedLookup).subscribe(res=>{
          this.listOfItemsSelected=res;
          this.itemLookupList=res[0].id;
        })
      }

      })
    
    }
    getLookUp(){
        try {
          this.lookupService.getAllLookUp().subscribe(result=>{
           if(result.length>0)
           {
             this.listoflookup =result;
             this.filteredLookUp=result;
             this.selectedStore = this.filteredLookUp[0].id;
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
      getStoreByName(id:string){
        this.lookupService.getLookUpByType(id).subscribe(
          result=>{
            this.listofStore=result
          }
        )
      }
    getCategory()
    {
      // try {
       this.CategoryService.getAllLookUpCategory().subscribe(result=>{
         let store =result.find(c=>c.name=='Store');
            if(store){
              this.getStoreByName(store.id);
            }
       })
      // }
    }
       getAllItemCategory(){
         this.ItemCategoryService.getAllItemCategories().subscribe(result=>{
         if(result.length>0)
           {
             this.ListOfItemCategory =result;
             this.SelectedCatagory = this.ListOfItemCategory[1].id
            }
           else
            {
             this.AlertInternet();
           }
          }
          );
       }
      // }
      // catch(error) {
      //  console.log(error);
      // }
  
    getItemList()
    {
      this.itemsService.getAllItem().subscribe(result=>{
      this.listofItems= result
       
      });
    }
    getItemListAfterSave(quantity:number, storeid:string,name:string,amhricName:string,price:number)
    {
      this.itemsService.getAllItemKEY(quantity,storeid,name,amhricName,price).subscribe(result=>{
      this.listofItems= result.sort((b, a) => a.id - b.id)
      this.ItemId= this.listofItems[0].id
      this.balanceService.getBalanceByItemId(this.ItemId).subscribe(res=>{
        this.res=res;
        this.a=res.length
         })
         if(this.a>0)
         {
           let balance ={
             itemId:this.ItemId,
             beginingAmount:this.res[0].price,
             currentAmount:+this.res[0].currentAmount+price,
             storeId:storeid,
           }
           this.balanceService.updateBalance(balance,this.res[0].id);
         }
         else
         {
           let balance ={
             itemId:this.ItemId,
             beginingAmount:price,
             currentAmount:price,
             storeId:storeid,
           }
           this.balanceService.create(balance);
            }
         //  this.listofItems[0].id=null;
           
      });
    }
    onOptionsSelected($event)
    {
         this.lookupService.getLookUpByType($event.target.value).subscribe(result=>
        {
           this.listoflookup=result;
        });
      
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
  
    onPickImage() {
      if(this.usePicker==true){
        // if (!Capacitor.isPluginAvailable('Camera')) {
          this.filePickerRef.nativeElement.click();
          return;
        }
      Plugins.Camera.getPhoto({
        quality: 50,
        source: CameraSource.Prompt,
        correctOrientation: true,
        height: 320,
        width: 300,
        resultType: CameraResultType.Base64
      })
        .then(image => {
          this.base64textString='data:image/png;base64,' + image.base64String;
        })
        .catch(error => {
          console.log(error);
          if (this.usePicker) {
            this.filePickerRef.nativeElement.click();
          }
          return false;
        });
    }
    onFileChosen(event: Event) {
      const pickedFile = (event.target as HTMLInputElement).files[0];
      if (!pickedFile) {
        return;
      }
      const fr = new FileReader();
      fr.onload = () => {
        const dataUrl = fr.result.toString();
        this.base64textString = dataUrl;
      };
      fr.readAsDataURL(pickedFile);
    }
    filter(query) { 
        this.filteredItemsSearch = (query.target.value) ? 
        this.listofItems.filter(p =>p.name.toLowerCase().includes(query.target.value.toLowerCase())) :
        this.listofItems;
    }
    validateForm(formData: Items) {
      this.isValid = true;
      if (formData.price == 0)
        this.isValid = false;
      else if (formData.Quantity == 0)
        this.isValid = false;
      return this.isValid;
    }
    Save()
    {
      this.regform.get('picture').setValue(this.base64textString);
      if(this.regform.valid)
      {
     if(!this.itemId)
     {
       this.itemsService.create(this.regform.value);
       let price = this.regform.get('price').value;
       let name =this.regform.get('name').value;
       let amhricName= this.regform.get('AmaricName').value;
       let Quantity=this.regform.get('Quantity').value;
       let storeid=this.regform.get('storeid').value;
       this.getItemListAfterSave(Quantity,storeid,name,amhricName,price)
     }
     else
     {
      this.itemsService.updateItem(this.regform.value,this.itemId);
     }
      this.presentAlert();
      this.base64textString = '';
      this.regform.reset();
      this.itemId=null;
      this. getCategory();
    }
    else
    {
        this.ErrorAlert();
    }
    }
    delete(item :Items )
    {
      this.presentAlertConfirm(item)
    }
    async presentAlertConfirm(item :Items) {
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
            this.itemsService.removeItems(item.id);
           this.regform.reset();
           this.itemId=null;
            }
          }
        ]
      });
  
      await alert.present();
    }
    async ErrorAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        // subHeader: 'Subtitle',
        message: 'Please Enter All field.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Item',
        // subHeader: 'Subtitle',
        message: 'Items Saved successfully.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
     
    Edit(item :Items)
    {   this.editMode=true;
        this.itemId =item.id;
        this.regform.get('name').setValue(item.name);
        this.regform.get('AmaricName').setValue(item.AmaricName);
        this.regform.get('type').setValue(item.type);
        this.regform.get('discrption').setValue(item.discrption);
        this.regform.get('CatagoryId').setValue(item.CatagoryId);
        this.regform.get('price').setValue(item.price);
        this.regform.get('Quantity').setValue(item.Quantity);
        this.regform.get('storeid').setValue(item.storeid);
        this.regform.get('brand').setValue(item.brand);
        this.regform.get('remark').setValue(item.remark);
        this.base64textString = item.picture;
        
    }
    // async ShowModal()
    // {
     
    //   const modal = await this.modalCtrl.create({

    //    component: LoginPage
    //    //componentProps: 
    //  });
  
    //  return await modal.present();
     
    // }

    // ShowLogin()
    // {
    //   this.ShowModal();
    // }
    // Logout()
    // {
    //   this.loginservice.LoginUser.next(false);
    //   this.ISLogin=false;
    //   this.navMod.navigateBack(['/tab']);
    // }
         //paging function
  onTableDataChange(event){
    this.page = event;
    this.getItemList();
  }  
  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getItemList();
  }
  }
  