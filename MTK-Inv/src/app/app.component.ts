
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
  showLevel1 = null;
  showLevel2 = null;
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
      tittle: 'Sale',
      url: '/Sale',
      icon: 'bag-handle',
      subPages: [{ title: 'Product Price list', url: '/product-price-list',icon: 'list' },
      { title: 'Product Sales', url: 'product-sale',icon: 'list' },
      { title: 'Sale Order summary', url: 'sale-order-summary',icon: 'list' },
      { title: 'Sale Order Profile', url: 'sale-order-profit',icon: 'list' },
      { title: 'Customer', url: 'customer',icon: 'list' },
      { title: 'operations',url:'operations',icon:'list'}]
    },
    {
      tittle: 'Purchasing',
      url: '/Purchases',
      icon: 'briefcase',
      subPages: [{ title: 'Orders', url: '/orders', icon: 'list' },
      { title: 'Vendors', url: '/vendors', icon: 'list' },
      { title: 'Purchase Orders Status', url: '/purchase-order-status', icon: 'list' },
      { title: 'Purchasing tax', url: '/purchasing-tax', icon: 'list' }]
    },
    {
      tittle: 'Stock Levels',
      url: '/Stock-Level',
      icon: 'bag',
      subPages: [{ title: 'Inventory', url: '/inventory', icon: 'list' },
      { title: 'Historical inventory', url: '/historical-inventory', icon: 'list' },
      { title: 'Inventory Aging', url: '/inventory-aging', icon: 'list' }]
    },
    {
      tittle: 'Payment and Accounting',
      url: '/Inventory-payment',
      icon: 'bar-chart',
      subPages: [{ title: 'Customer Payment', url: '/customer-payments', icon: 'list' },
      { title: 'Vendor payment details', url: '/vendor-payment-details', icon: 'list' },
      { title: 'Taxes', url: '/taxes', icon: 'list' },
      { title: 'Sale Order Profit', url: '/sales-order-profit', icon: 'list' }]
    },
    {
      tittle: 'Audit Log',
      url: '/Audit',
      icon: 'reader',
      subPages: [{ title: 'Inventory movement', url: '/inventory-movement-log', icon: 'list' },
      { title: 'Product cost', url: '/product-cost', icon: 'list' },
      { title: 'Stock Transfer', url: '/stock-transfer', icon: 'list' },
      { title: 'Count Sheet', url: '/count-sheet', icon: 'list' }]
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
  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };
  toggleLevel2(idx) {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
  };
  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

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
