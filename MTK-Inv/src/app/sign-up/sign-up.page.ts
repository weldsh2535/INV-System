import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private authServices:AuthService,private router:Router,
		private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  async signUpUser(form):Promise<void> {
		this.authServices.signUpUser(form.value.email,form.value.password).
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

}
