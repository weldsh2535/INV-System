import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ItemsService } from 'src/app/Service/items.service';
import { Items } from 'src/Tabels/tabels-list';

@Component({
  selector: 'app-product-price-list',
  templateUrl: './product-price-list.page.html',
  styleUrls: ['./product-price-list.page.scss'],
})
export class ProductPriceListPage implements OnInit {
  itemsOfList: Items[];
  a: number=0;
  private loading;
  generateList:boolean=true;
  constructor(private itemsService:ItemsService,
    private loadingController:LoadingController) { }

  ngOnInit() {
    this.getItemList();
  }
  getItemList(){
    this.itemsService.getAllItem().subscribe(itemList=>{
      if(this.a==0){
        this.itemsOfList=null
      }
      else{
        this.itemsOfList = itemList;
        this.generateList=false;
      }
    })
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
  this.a=1
  this.getItemList();
  },4000);
  }
}
