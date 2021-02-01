import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { LineItem } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class LineItemsService {
  private lineItemCollectionList:AngularFirestoreCollection<any>;
  private lineItemList:Observable<any[]>;
  constructor(db:AngularFirestore) { 
    this.lineItemCollectionList=db.collection<LineItem>('LineItem');
  }
  create(LineItem) { 
    return this.lineItemCollectionList.add(LineItem);
  }
  getAllLineItem() {
    this.lineItemList = this.lineItemCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.lineItemList;
  }
  updateLineItem(saleOrder:LineItem, id: string) {
    return this.lineItemCollectionList.doc(id).update(LineItem);
  }
  getLineItem(id) {
    return this.lineItemCollectionList.doc<any>(id).valueChanges();
  }
  removeLineItem(id) {
    return this.lineItemCollectionList.doc(id).delete();
  } 
}
