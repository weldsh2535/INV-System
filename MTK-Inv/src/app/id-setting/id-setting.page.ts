import { LookupService } from './../Service/lookup.service';
import { IdSetting, Lookup } from './../../Tabels/tabels-list';
import { IdSettingService } from '../Service/id-setting.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-id-setting',
  templateUrl: './id-setting.page.html',
  styleUrls: ['./id-setting.page.scss'],
})
export class IdSettingPage implements OnInit {
  regform: any;
  IdSettingId: string;
  editMode: boolean=false;
  vouchertype:Lookup[];
  idSettingList:IdSetting[];
  idSettingList$:Observable<IdSetting[]>
  searchText:string;
  //paging declaration
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];
  currentIndex = -1;
  listOfIdSetting: IdSetting[];
  lengthOfIdSetting: number;
  constructor(private fb : FormBuilder, private idSettingService:IdSettingService,
    private lookupService:LookupService,
    private alertController: AlertController) { }
  ngOnInit() {
    this.regform =this.fb.group({
      voucherTypeId:['',Validators.required],
      prefix:['',Validators.required],
      length:[''],
      suffix:[''],
      currentId:['']
    });
    this.lookupService.getLookUpByType('HuXhQ8ChpLL3DbXQR6yh').subscribe(result=>{
      this.vouchertype=result;
     });
     this.allIdSetting();
  }
  allIdSetting()
  {
   this.idSettingService.getAllIdSetting().subscribe(result=>{
    
     this.idSettingList=result;
     this.lengthOfIdSetting= this.idSettingList.length;
   // console.log(this.lengthOfIdSetting);
   });
  }
  
  Save()
  {
    if(this.regform.valid)
    {
      if(!this.IdSettingId)
      {
        this.idSettingService.create(this.regform.value);
      }
      else{
       this.idSettingService.updateIdSetting(this.regform.value,this.IdSettingId)
      }
      this.regform.reset();
      this.IdSettingId="";
      this.presentAlert("Save Sucessfully");
    }
    else{
     this.presentAlert("Please enter all fields");
    }
  }
  async presentAlert(message) {
   const alert = await this.alertController.create({
     cssClass: 'my-custom-class',
     header: 'Id Setting',
     // subHeader: 'Subtitle',
     message: message,
     buttons: ['OK']
   });
   await alert.present();
 }
 Edit(item :IdSetting,slidingItem: IonItemSliding )
 {
   this.editMode=true;
   this.IdSettingId=item.id;
   this.regform.get("voucherTypeId").setValue(item.voucherTypeId);
   this.regform.get("length").setValue(item.length);
   this.regform.get("prefix").setValue(item.prefix);
   this.regform.get("suffix").setValue(item.suffix);
   this.regform.get("currentId").setValue(item.currentId);
   //slidingItem.close();
 }
 delete(item :IdSetting,slidingItem: IonItemSliding )
    {
      this.presentAlertConfirm(item)
    }
    async presentAlertConfirm(item :IdSetting) {
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
            this.idSettingService.removeIdSetting(item.id);
           this.regform.reset();
           this.IdSettingId=null;
            }
          }
        ]
      });
  
      await alert.present();
    }
    getIdSetting(){
      try{
       this.idSettingService.getAllIdSetting().subscribe(result=>{ 
       if(result.length>0){
         this.listOfIdSetting=result;
       }
       else
       {
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
     //paging function
  onTableDataChange(event){
    this.page = event;
    this.getIdSetting();
  }  
  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getIdSetting();
  }
 
}
