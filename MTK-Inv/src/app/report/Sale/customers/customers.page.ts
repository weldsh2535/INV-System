import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';
import { Customer } from 'src/Tabels/tabels-list';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customerList: Customer[];

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getCustomerList();
  }
 getCustomerList(){
   this.customerService.getAllCustomer().subscribe(res=>{
     this.customerList = res;
   });
 }
 generate(){
   
 }
}
