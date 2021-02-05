
import { Router } from '@angular/router';
import { LookupService } from './Service/lookup.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Lookup } from 'src/Tabels/tabels-list';
import { SharedService } from './Service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  vouchertype: Lookup[];
  name: string;
  selectedList: boolean = false;
  public selectedIndex1 = 11;
  public selectedIndex2 = 15;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Lookup Catagory',
      url: '/catagory',
      icon: 'list'
    },
    {
      title: 'lookup',
      url: '/lookup',
      icon: 'options'
    },
    {
      title: 'Items',
      url: '/items',
      icon: 'bar-chart'
    },
    {
      title: 'Customer Registration ',
      url: '/customer',
      icon: 'person-circle'
    },
    // {
    //   title: 'Supplier Registration',
    //   url: '/supplier',
    //   icon: 'person-add'
    // },
    {
      title: 'Item Category',
      url: '/item-category',
      icon: 'add-circle'
    },
    {
      title: 'Vendors',
      url: '/vendors',
      icon: 'add-circle'
    },
    {
      title: 'Id Setting ',
      url: '/id-setting',
      icon: 'add-circle'
    },
    {
      title: 'Recieve Payment',
      url: '/recieve-payment',
      icon: 'add-circle'
    },
    {
      title: 'Pay Supplier',
      url: '/pay-supplier',
      icon: 'add-circle'
    }
    // {
    //   title: 'Filter Example',
    //   url: '/filter',
    //   icon: 'add-circle',
    // }  
  ];
  public reportPage = [
    {
      tittle: 'Sales ',
      url: '/',
      icon: 'add-circle',
      subPages: [{ title: 'Product Price list', url: '',icon: 'list' },
      { title: 'Product Sales', url: '',icon: 'list' },
      { title: 'Sale Order summary', url: '',icon: 'list' },
      { title: 'Sale Order Profile', url: '',icon: 'list' },
      { title: 'Customer', url: '',icon: 'list' }]
    },
    {
      tittle: 'Purchasing',
      url: '/',
      icon: 'add-circle',
      subPages: [{ tittle: 'Orders', url: '', icon: 'list' },
      { title: 'Vendors', url: '', icon: 'list' },
      { title: 'Purchase Orders Status', url: '', icon: 'list' },
      { title: 'Purchasing tax', url: '', icon: 'list' }]
    },
    {
      tittle: 'Stock Levels',
      url: '/',
      icon: 'add-circle',
      subPages: [{ tittle: 'Inventory', url: '', icon: 'list' },
      { title: 'Historical inventory', url: '', icon: 'list' },
      { title: 'Inventory Aging', url: '', icon: 'list' }]
    },
    {
      tittle: 'Payment and Accounting',
      url: '/',
      icon: 'add-circle',
      subPages: [{ tittle: 'Customer Payment', url: '', icon: 'list' },
      { title: 'Vendor payment details', url: '', icon: 'list' },
      { title: 'Taxes', url: '', icon: 'list' },
      { title: 'Sale Order Profit', url: '', icon: 'list' }]
    },
    {
      tittle: 'Audit Log',
      url: '/',
      icon: 'add-circle',
      subPages: [{ tittle: 'Inventory movement', url: '', icon: 'list' },
      { title: 'Product cost', url: '', icon: 'list' },
      { title: 'Stock Transfer', url: '', icon: 'list' }]
    },
  ];
  selectedPage: boolean = false;
  subReport: boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private lookupService: LookupService,
    private router: Router,
    private sharedService: SharedService
  ) {

    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  show(): void {
    this.selectedList = !this.selectedList;
  }
  reportPageShow() {
    this.selectedPage = !this.selectedPage;
  }
  subReportShow() {
    this.subReport = !this.subReport;
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.lookupService.getLookUpByType('HuXhQ8ChpLL3DbXQR6yh').subscribe(result => {
      this.vouchertype = result;
      this.name = result[0].name;
      // console.log(this.vouchertype);
    })
  }
  readPath(path) {
    this.router.navigate(['/vocher']);
    let voucher = {
      id: path.id,
      name: path.name
    }
    this.sharedService.VoucherTypeId.next(voucher)
  }

}
