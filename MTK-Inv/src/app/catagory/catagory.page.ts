import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, ModalController, NavController, Platform } from '@ionic/angular';
import { CatagoryService } from '../Service/catagory.service';
import { Plugins,CameraSource,CameraResultType } from '@capacitor/core';
import { LookupCatagory } from 'src/Tabels/tabels-list';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.page.html',
  styleUrls: ['./catagory.page.scss'],
})
export class CatagoryPage implements OnInit {

  @ViewChild('filePicker', {static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  base64textString: string;
  usePicker = false;
  regform = this.fb.group({});
  CatagoryId: string;
  ListOfCategory: LookupCatagory[];
  filteredCategory: LookupCatagory[];
  editMode: boolean=false;
  constructor(private fb : FormBuilder ,private platform: Platform ,
    private CategoryService: CatagoryService,
   private alertController: AlertController
    ) {
     
     }

  ngOnInit() {
     this.regform =this.fb.group({
      name:['',Validators.required],
      picture:[''],
      remark:['']
    });
    
    this. getCategory();
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
   ) {
     this.usePicker = true;
   }
    }
      
    getCategory()
    {
      try {
        this.CategoryService.getAllLookUpCategory().subscribe(result=>{
         if(result.length>0)
         {
           this.ListOfCategory =result;
           this.filteredCategory=result;
         }
         else
         {
          this.AlertInternet();
         }
        });
      }
      catch(error) {
       console.log(error);
      }
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
        this.filteredCategory = (query.target.value) ? 
        this.ListOfCategory.filter(p => p.name.toLowerCase().includes(query.target.value.toLowerCase())) :
        this.ListOfCategory;
    }
    Save()
    {
      this.regform.get('picture').setValue(this.base64textString);
      if(this.regform.valid)
      {
     if(!this.CatagoryId)
     {
       this.CategoryService.create(this.regform.value).then(
        () =>
        (error: AppError) => {
          if (error instanceof BadInput) {
          this.regform.setErrors(error.originalError);
          }
          else throw error;
        }
       );
     }
     else
     {
      this.CategoryService.updateCategory(this.regform.value,this.CatagoryId).then(
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
      this.CatagoryId=null;
      this. getCategory();
    }
    else
    {
        this.ErrorAlert();
    }
    }
     
    delete(item :LookupCatagory,slidingItem: IonItemSliding )
    {
      this.presentAlertConfirm(item).then(
        () =>
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        }
      )
    }
    async presentAlertConfirm(item :LookupCatagory) {
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
            this.CategoryService.removeCategory(item.id);
           this.regform.reset();
           this.CatagoryId=null;
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
        header: 'Catagory',
        // subHeader: 'Subtitle',
        message: 'Catagory Saved successfully.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
     
    Edit(item :LookupCatagory,slidingItem: IonItemSliding )
    {   this.editMode=true;
        this.CatagoryId =item.id;
        this.regform.get('name').setValue(item.name);
        this.regform.get('remark').setValue(item.remark);
        this.base64textString = item.picture;
        slidingItem.close();
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
    // }U
  }
  