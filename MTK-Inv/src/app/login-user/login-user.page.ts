import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {
  regform = this.fb.group({});
  usePicker = false;
  loginuserId: string;
  constructor(private fb : FormBuilder ,private platform: Platform ,private loginServiceService: LoginServiceService,
    private alertController: AlertController
     ) { }

     ngOnInit() {
      this.regform =this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required],
     });
     
     if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
       this.platform.is('desktop')
    ) 
    {
      this.usePicker = true;
    }
      
     }
     
     Login()
     { 
      if(this.regform.valid)
     {
       if(!this.loginuserId)
       {
         this.loginServiceService.create(this.regform.value);
       }
       else{
        this.loginServiceService.updateLoginUser(this.regform.value,this.loginuserId)
       }
       this.regform.reset();
       this.loginuserId="";
       this.presentAlert("Save Sucessfully");
       
     }
     else{
      this.presentAlert("plase enter all filds");
     }
     }
     async presentAlert(message) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'User login',
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }
}
