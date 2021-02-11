import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/Tabels/tabels-list';
import { CustomerService } from '../Service/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  regform = this.fb.group({});
  listOfCustomer: Customer[];
  selectedCustomer: any;
  constructor(private fb:FormBuilder,private customerService:CustomerService) { }

  ngOnInit() {
    this.regform =this.fb.group({ 
      empId: ['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
   });
  }
  save(){

  }
  getCustomerList(){
    this.customerService.getAllCustomer().subscribe(customerList=>{
      this.listOfCustomer = customerList;
      this.selectedCustomer= customerList[0].id
    })
    
  }
}
