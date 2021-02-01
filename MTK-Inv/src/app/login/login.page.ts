
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	phoneNumber:number;
	recaptchaVerifier:firebase.auth.RecaptchaVerifier;
	constructor(private authServices:AuthService,private router:Router,
		private alertCtrl:AlertController) { }

	ngOnInit() {
		
		this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
	}

	signIn(phoneNumber: number){
		const appVerifier = this.recaptchaVerifier;
		const phoneNumberString = "+251" + phoneNumber;
		firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
		  .then( async (confirmationResult) => {
			// SMS sent. Prompt user to type the code from the message, then sign the
			// user in with confirmationResult.confirm(code).
			let prompt = await this.alertCtrl.create({
			//title: 'Enter the Confirmation code',
			inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
			buttons: [
			  { text: 'Cancel',
				handler: data => { console.log('Cancel clicked'); }
			  },
			  { text: 'Send',
				handler: data => {
				  confirmationResult.confirm(data.confirmationCode)
				  .then(function (result) {
					// User signed in successfully.
					console.log(result.user);
					this.router.navigateByUrl('home');
					// ...
				  }).catch(function (error) {
					// User couldn't sign in (bad verification code?)
					// ...
				  });
				}
			  }
			]
		  });
		  await prompt.present();
		})
		.catch(function (error) {
		  console.error("SMS not sent", error);
		});
	  
	  }
	  
	/* async loginUser(form):Promise<void> {
		this.authServices.loginUser(form.value.email,form.value.password).
		then(
			()=>{
				this.router.navigateByUrl('home');
			},
			async error=>{
				const alert=await this.alertCtrl.create({
					message:error.message,
					buttons:[{text:'ok',role:'cancel'}],
				});
				await alert.present();
			}
			
		);
	}
	goToRest(){
		this.router.navigateByUrl('password-reset');
	}
	goTosignUp(){
		this.router.navigateByUrl('sign-up');
	}*/
}
