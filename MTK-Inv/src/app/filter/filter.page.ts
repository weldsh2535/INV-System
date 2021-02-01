import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Vendors } from 'src/Tabels/tabels-list';
import { Order, Service } from '../Service/order.service';
import { VendorsService } from '../Service/vendors.service';

@Component({
  selector: 'app-filter',
 // providers: [ Service ],
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  vendors: Vendors[];
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;
  listOfvendors: Vendors[];
  constructor(private vendorService:VendorsService) {
     // this.vendors = service.getOrders();
      this.vendorService.getAllVendor().subscribe(result=>{ 
        if(result.length>0){
          this.listOfvendors=result;
         // this.filteredVendors=result;
        }
        else
        {
        //this.AlertInternet();
        }
        });
      this.showFilterRow = true;
      this.showHeaderFilter = true;
      this.applyFilterTypes = [{
          key: "auto",
          name: "Immediately"
      }, {
          key: "onClick",
          name: "On Button Click"
      }];
      this.saleAmountHeaderFilter = [{
          text: "Less than $3000",
          value: ["SaleAmount", "<", 3000]
      }, {
          text: "$3000 - $5000",
          value: [
              ["SaleAmount", ">=", 3000],
              ["SaleAmount", "<", 5000]
          ]
      }, {
          text: "$5000 - $10000",
          value: [
              ["SaleAmount", ">=", 5000],
              ["SaleAmount", "<", 10000]
          ]
      }, {
          text: "$10000 - $20000",
          value: [
              ["SaleAmount", ">=", 10000],
              ["SaleAmount", "<", 20000]
          ]
      }, {
          text: "Greater than $20000",
          value: ["SaleAmount", ">=", 20000]
      }];
      this.currentFilter = this.applyFilterTypes[0].key;
      this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  }

  private static getOrderDay(rowData) {
      return (new Date(rowData.OrderDate)).getDay();
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
      let column = this as any;
      if(target === "headerFilter" && value === "weekends") {
          return [[FilterPage.getOrderDay, "=", 0], "or", [FilterPage.getOrderDay, "=", 6]];
      }
      return column.defaultCalculateFilterExpression.apply(this, arguments);
  }

  orderHeaderFilter(data) {
      data.dataSource.postProcess = (results) => {
          results.push({
              text: "Weekends",
              value: "weekends"
          });
          return results;
      };
  }

  clearFilter() {
      this.dataGrid.instance.clearFilter();
  }
}

