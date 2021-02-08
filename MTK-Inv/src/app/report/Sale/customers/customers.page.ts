import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CustomerService } from 'src/app/Service/customer.service';
import { Customer } from 'src/Tabels/tabels-list';
import { Papa } from 'ngx-papaparse';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customerList: Customer[];
  generateB: number = 0;
  generateList: boolean = true;
  private loading;
  csvData: any[] = [];
  headerRow: any[] = [];
  constructor(private customerService: CustomerService,
    public loadingController: LoadingController,
    private papa: Papa, private platform: Platform,
    private file: File,
    private socialSharing: SocialSharing
  ) {
    this.loadCSV();
  }

  ngOnInit() {
    this.getCustomerList();
  }
  private loadCSV() {
    this.customerService.getAllCustomer()
      .subscribe(
        data =>  this.extractData(JSON.stringify(data)),
        err => console.log('something went wrong: ', err)
      );
  }
  private extractData(res) {
    let csvData = res || '';
    this.papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0, 1)[0];
        console.log("header -----------"+this.headerRow)
        this.csvData = parsedData.data;
        console.log("data list----"+this.csvData)
      }
    });
  }

  exportCSV() {
    let csv = this.papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });

    if (this.platform.is('cordova')) {
      this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, { replace: true }).then(res => {
        this.socialSharing.share(null, null, res.nativeURL, null).then(e => {
          // Success
        }).catch(e => {
          console.log('Share failed:', e)
        });
      }, err => {
        console.log('Error: ', err);
      });

    } else {
      // Dummy implementation for Desktop download purpose
      var blob = new Blob([csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'newdata.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  getCustomerList() {
    this.customerService.getAllCustomer().subscribe(res => {
      if (this.generateB == 0) {
        this.customerList = null;
      }
      else {
        this.customerList = res;
        this.generateList = false;
      }

    });
  }
  filter() {

  }
  generate() {
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    }).then((overlay) => {
      this.loading = overlay
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
      this.generateB = 1
      this.getCustomerList();
    }, 4000);
  }
}
