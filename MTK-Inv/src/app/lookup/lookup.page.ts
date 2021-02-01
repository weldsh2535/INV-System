import { LookupCatagoryService } from './../Service/lookup-catagory.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { ItemCategory, Lookup, LookupCatagory } from 'src/Tabels/tabels-list';
import { CatagoryService } from '../Service/catagory.service';
import { LookupService } from '../Service/lookup.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.page.html',
  styleUrls: ['./lookup.page.scss'],
})
export class LookupPage implements OnInit {
  listofItemcatagory: ItemCategory[];
  regform = this.fb.group({});
  lookupId: string;
  listOflookUp: Lookup[];
  filteredLookUp: Lookup[];
  
  editMode:boolean=false;
  listOfLookupCatagory:LookupCatagory[];
  SelectedLookup: string;
  constructor(private fb : FormBuilder, private lookupService:LookupService,
    private alertController: AlertController,private lookupCatagoryService:LookupCatagoryService ) { }
   
  ngOnInit() {
    this.regform =this.fb.group({
      name:['',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]*")])],
      type:['',Validators.required],
      value:[''],
      remark:['']
    });
   this.allLookupCatagory();
   this.readLookup();
  }

  readLookup()
  {
     this.lookupService.getAllLookUp().subscribe(res=>{
       this.listOflookUp= res;
     })
  }
  SelectedValue($event){
    this.lookupService.getAllLookUp().subscribe(res=>{
      this.listOflookUp= res;
  this.filteredLookUp=this.listOflookUp.filter(c=>c.type==$event.target.value);
   })
  }
  filter(query) { 
    this.filteredLookUp = (query.target.value) ? this.listOflookUp.filter(p => p.name.toLowerCase().includes(query.target.value.toLowerCase())) :
    this.listOflookUp;
}
   allLookupCatagory()
   {
    this.lookupCatagoryService.getAllLookupCatagory().subscribe(result=>{
      this.listOfLookupCatagory=result;
      this.SelectedLookup=this.listOfLookupCatagory[0].id;
    })
   }
   Save()
   {
     if(this.regform.valid)
     {
       if(!this.lookupId)
       {
         this.lookupService.create(this.regform.value);
       }
       else{
        this.lookupService.updateLookup(this.regform.value,this.lookupId)
       }
       this.regform.reset();
       this.lookupId="";
       this.presentAlert("Save Sucessfully");
     }
     else{
      this.presentAlert("plase enter all fields");
     }
   }
   async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'lookup',
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  Edit(item :Lookup,slidingItem: IonItemSliding )
  {
    this.editMode=true;
    this.lookupId=item.id;
    this.regform.get("name").setValue(item.name);
    this.regform.get("type").setValue(item.type);
    this.regform.get("value").setValue(item.value);
    this.regform.get("remark").setValue(item.remark);
    slidingItem.close();
  }
  delete(item :Lookup,slidingItem: IonItemSliding )
    {
      this.presentAlertConfirm(item)
    }
    async presentAlertConfirm(item :Lookup) {
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
            this.lookupService.removeLookup(item.id);
           this.regform.reset();
           this.lookupId=null;
            }
          }
        ]
      });
      await alert.present();
    }

}
