import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.page.html',
  styleUrls: ['./user-role.page.scss'],
})
export class UserRolePage implements OnInit {
  regform = this.fb.group({});
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.regform =this.fb.group({ 
      funId:['',Validators.required],
      userId: ['',Validators.required],
      remark: ['',Validators.required],
   });
  }
  save(){

  }
}
