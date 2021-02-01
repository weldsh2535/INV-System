import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Items } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemCollectionList: AngularFirestoreCollection<any>;
  private itemsList: Observable<any[]>;
  balanceList: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.itemCollectionList = db.collection<Items>('Items');
  }
  getItemList() {
    //return this.http.get(environment.apiURL+'/Item').toPromise();
  }

  create(Category) {
    let values = this.itemCollectionList.add(Category)
      .then(function (docRef) {
        let id = docRef.id;
        // this.keyId =id;
        console.log(id)
        // return id;
      });
    return values;
  }
  getBalanceByItemId(id: string) {
    const lookUpObj = this.db.collection('Items', ref => ref.where('id', '==', id)).snapshotChanges();
    this.balanceList = lookUpObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.balanceList;
  }
  getItemByLookup(selectedLookup:string){
    const lookUpObj = this.db.collection('Items', ref => ref.where('type', '==', selectedLookup)).snapshotChanges();
    this.itemsList = lookUpObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.itemsList;
  }
  getItemByID(id:string){
    const lookUpObj = this.db.collection('Items', ref => ref.where('type', '==', id)).snapshotChanges();
    this.itemsList = lookUpObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.itemsList;
  }
  getItemByStoreID(storeid: string) {
    const lookUpObj = this.db.collection('Items', ref => ref.where('storeid', '==', storeid)).snapshotChanges();
    this.itemsList = lookUpObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.itemsList;
  }
  getAllItem() {
    this.itemsList = this.itemCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.itemsList;
  }
  getAllItemKEY(Quantity, storeid, name, amhricName,price) {
    const lookUpObj = this.db.collection('Items', ref => ref.where('storeid', '==', storeid)
      .where('Quantity', '==', Quantity)
      .where('name', '==', name)
      .where('price', '==',price )
      .where('AmaricName', '==', amhricName)).snapshotChanges();
    this.itemsList = lookUpObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.itemsList;
  }
  getItem(id) {
    return this.itemCollectionList.doc<any>(id).valueChanges();
  }

  updateItem(Item: Items, id: string) {
    return this.itemCollectionList.doc(id).update(Item);
  }

  addItem(Item: any) {
    return this.itemCollectionList.add(Item);
  }

  removeItems(id) {
    return this.itemCollectionList.doc(id).delete();
  }
}

