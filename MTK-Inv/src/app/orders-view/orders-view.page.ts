import { PurchaseService } from './../Service/purchase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from 'src/Tabels/tabels-list';
@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.page.html',
  styleUrls: ['./orders-view.page.scss'],
})
export class OrdersViewPage implements OnInit {

  orderList:Purchase[];

  constructor(private purchaseservice: PurchaseService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    this.purchaseservice.getAllPurchase()
    .subscribe(res =>{
      this.orderList = res
    } );
  }
  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }
  onOrderDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.purchaseservice.removePurchase(id).then(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully", "Restaurent App.");
      });
    }
  }

}
