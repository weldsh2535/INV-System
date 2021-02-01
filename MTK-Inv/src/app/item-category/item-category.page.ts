import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Plugins,CameraSource,CameraResultType } from '@capacitor/core';
import { ItemCategoryService } from '../Service/item-category.service';
import { ItemCategory } from 'src/Tabels/tabels-list';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.page.html',
  styleUrls: ['./item-category.page.scss'],
})
export class ItemCategoryPage implements OnInit {
  @ViewChild('filePicker', {static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  regform = this.fb.group({});
  base64textString: string;
  usePicker = false;
  ListOfItemCategory: ItemCategory[];
  filteredCategory: ItemCategory[];
  itemCatagoryId: string;
  editMode: boolean=false;
  selectedCatagory: string;
  constructor(private fb : FormBuilder ,private platform: Platform ,
    private alertController: AlertController,
    private itemCategoryService:ItemCategoryService) { 

    }

  ngOnInit() {
    this.regform =this.fb.group({
      categoryName:['',Validators.required],
      picture:[''],
      description:[''],
      parentcategory:['']
      });
      
      this. getItemCategory();
      if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
        this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }
  //listofItemCategory()
  //{
  //  return this.itemCategoryService.getAllItemCategories();
  //}
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

Save(){
  this.regform.get('picture').setValue(this.base64textString);
      if(this.regform.valid)
      {
     if(!this.itemCatagoryId)
     {
       this.itemCategoryService.create(this.regform.value).then(
        () =>
        (error: AppError) => {
          if (error instanceof BadInput) {
          this.regform.setErrors(error.originalError);
          }
          else throw error;
        }
       );;
     }
     else
     {
      this.itemCategoryService.updateItemCategory(this.regform.value,this.itemCatagoryId)
      .then(
        () =>
        (error: AppError) => {
          if (error instanceof BadInput) {
          this.regform.setErrors(error.originalError);
          }
          else throw error;
        }
       );
     }
      this.presentAlert();
      this.base64textString = '';
      this.regform.reset();
      this.itemCatagoryId=null;
      this.getItemCategory();
    }
    else
    {
        this.ErrorAlert();
    }
}
getItemCategory(){
  try {
    this.itemCategoryService.getAllItemCategories().subscribe(result=>{
     if(result.length>0)
     {
       this.ListOfItemCategory =result;
       this.filteredCategory=result;
       this.selectedCatagory=this.ListOfItemCategory[1].id;
     }
     else
     {
      this.ErrorAlert();
     }
     
    }
    );
  }
  catch(error) {
   console.log(error);
  }
}
async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Catagory',
    // subHeader: 'Subtitle',
    message: 'Catagory Saved successfully.',
    buttons: ['OK']
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
Edit(item :ItemCategory,slidingItem: IonItemSliding )
{   this.editMode=true;
    this.itemCatagoryId =item.id;
    this.regform.get('categoryName').setValue(item.categoryName);
    this.regform.get('description').setValue(item.description);
    this.regform.get('parentcategory').setValue(item.parentcategory);
    this.regform.get('picture').setValue(item.picture);
    this.base64textString = item.picture;
    slidingItem.close();
}
delete(item :ItemCategory,slidingItem: IonItemSliding )
{
  this.presentAlertConfirm(item)
}
async presentAlertConfirm(item :ItemCategory) {
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
        this.itemCategoryService.removeCategory(item.id);
       this.regform.reset();
       this.itemCatagoryId=null;
        }
      }
    ]
  });

  await alert.present();
}
filter(query) { 
  this.filteredCategory = (query.target.value) ? this.ListOfItemCategory.filter(p => p.categoryName.toLowerCase().includes(query.target.value.toLowerCase())) :
  this.ListOfItemCategory;
}
}