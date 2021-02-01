import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Supplier } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private supplierCollectionList:AngularFirestoreCollection<any>;
  private suppliersList: Observable<any[]>;
  constructor(db:AngularFirestore) {
    this.supplierCollectionList=db.collection<Supplier>('Supplier');
   }
   create(Supplier) { 
    return this.supplierCollectionList.add(Supplier);
    //return this.db.list('/Category').push(Category);
  }
  getAllSupplier() {
   
    this.suppliersList = this.supplierCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.suppliersList;
  }
  updateSupplier(Supplier: Supplier, id: string) {
    return this.supplierCollectionList.doc(id).update(Supplier);
  }
  updateCustomer(Customer: Supplier, id: string) {
    return this.supplierCollectionList.doc(id).update(Customer);
  }
 /* getSupplier(id) {
    return this.SupplierCollection.doc<any>(id).valueChanges();
  }
  addSupplier(Category: any) {
    return this.SupplierCollection.add(Category);
  }*/
  removeSupplier(id) {
    return this.supplierCollectionList.doc(id).delete();
  }
}
