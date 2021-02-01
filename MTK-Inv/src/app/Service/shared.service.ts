import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 VoucherTypeId = new Subject<any>();
  balance =new Subject<any>()
   
  constructor() { }
}
