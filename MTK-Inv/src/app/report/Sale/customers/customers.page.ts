import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CustomerService } from 'src/app/Service/customer.service';
import { Customer } from 'src/Tabels/tabels-list';
import { Papa } from 'ngx-papaparse';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customerList: Customer[];
  generateB: number=0;
  generateList:boolean=true;
  private loading;
  csvData: any[] = [];
  headerRow: any[] = [];
  constructor(private customerService:CustomerService,
    public loadingController: LoadingController,
    private papa:Papa,private platform:Platform,
    private file:File, private socialSharing:SocialSharing) { }

  ngOnInit() {
    this.getCustomerList();
  }
 getCustomerList(){
   this.customerService.getAllCustomer().subscribe(res=>{
     if(this.generateB==0){
      this.customerList = null;
     }
     else
     {
      this.customerList = res;
      this.generateList=false;
     }
    
   });
 }
 filter(){

 }
 generate(){ 
  this.presentLoading();
 }
 async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...'
  }).then((overlay)=>{
    this.loading =overlay
    this.loading.present();
  });
setTimeout(()=>{
this.loading.dismiss();
this.generateB=1
this.getCustomerList();
},4000);
}
}
