import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { saleOrder } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class SaleOrderService {
  private saleOrderCollectionList:AngularFirestoreCollection<any>;
  private saleOrder:Observable<any[]>;
  constructor(db:AngularFirestore) { 
    this.saleOrderCollectionList=db.collection<saleOrder>('saleOrder');
  }
  create(Purchase) { 
    return this.saleOrderCollectionList.add(Purchase);
  }
  //const incrment=firebase.firestore.FieldValue.increment(1);

  getAllSaleOrder() {
    this.saleOrder = this.saleOrderCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.saleOrder;
  }
  updateSaleOrder(saleOrderObj:saleOrder, id: string) {
    return this.saleOrderCollectionList.doc(id).update(saleOrderObj);
  }
  getSaleOrder(id) {
    return this.saleOrderCollectionList.doc<any>(id).valueChanges();
  }
  addPurchase(vendors: any) {
    return this.saleOrderCollectionList.add(vendors);
  }
  removeSaleOrder(id) {
    return this.saleOrderCollectionList.doc(id).delete();
  } 
}
