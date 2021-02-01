import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Customer } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerCollectionList: AngularFirestoreCollection<any>;
  private customersList: Observable<Customer[]>;
  //db: any;
  constructor(private db: AngularFirestore) { 
    this.customerCollectionList = db.collection<Customer>('Customer');
  
   }
   
   create(Customer) { 
    return this.customerCollectionList.add(Customer);
    //return this.db.list('/Category').push(Category);
  }
   getAllCustomer() {
    this.customersList = this.customerCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.customersList;
  }
  getUpdateBalance(id :string)
{
  const customerObj =  this.db.collection('Customer', ref => ref.where('type','==',  id )).snapshotChanges();
  this.customersList= customerObj.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as Customer;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.customersList;
}
  updateCustomer(customerObj: any, id: string) {
    return this.customerCollectionList.doc(id).update(customerObj);
  }
  getCategory(id) {
    return this.customerCollectionList.doc<any>(id).valueChanges();
  }
  addCategory(Category: any) {
    return this.customerCollectionList.add(Category);
  }
  removeCategory(id) {
    return this.customerCollectionList.doc(id).delete();
  }
}
