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
  generateB: number=0;
  generateList:boolean=true;
  constructor(private customerService:CustomerService) { }

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
 generate(){ 
   this.generateB=1
   this.getCustomerList();
 }
}
