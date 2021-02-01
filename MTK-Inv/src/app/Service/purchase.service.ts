import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import {  LineItem, Purchase } from 'src/Tabels/tabels-list';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  formData:Purchase;
  orderItems:LineItem[];
  private purchaseCollectionList:AngularFirestoreCollection<any>;
  private purchaseList:Observable<any[]>;
  lineItems: any[];
  listOfItems: any[];
  success: any;
  //readonly APIUrl="http://localhost:58089/api";
 constructor(private db: AngularFirestore,
  //private http:HttpClient
  ) { 
  this.purchaseCollectionList = db.collection<Purchase>('purchase');
 }

//  getDepList():Observable<any[]>{
//   return this.http.get<any>(this.APIUrl+'/department');
// }

// addDepartment(val:any){
//   return this.http.post(this.APIUrl+'/Department',val);
// }
  //  getPurchaseList():Observable<any[]>{
  //  return this.http.get<any>(this.APIUrl+'/Purchase');
  //  }
  //   getPurchaseByID(id:number):any {
  //   return this.http.get(this.APIUrl + '/Purchase/'+id).toPromise();
  // }
  create(Purchase) { 
    return this.purchaseCollectionList.add(Purchase);
  }
  // addPurchase(val:Object):Observable<Object>{
  // return this.http.post(this.APIUrl+'/Purchase',val);
  // }
  // saveOrUpdateOrder() {
  //   var body = {
  //     ...this.formData,
  //     OrderItems: this.orderItems
  //   };
  //  // return this.purchaseCollectionList.add(Purchase);
  //  return this.http.post(this.APIUrl + '/Purchase', body);
  // }
  getAllPurchase() {
    this.purchaseList = this.purchaseCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.purchaseList;
  }
  updatePurchase(purchaseObj:Purchase, id: string) {
    return this.purchaseCollectionList.doc(id).update(purchaseObj);
  }
  getPurchase(id) {
    return this.purchaseCollectionList.doc<any>(id).valueChanges();
  }
  // addPurchase(vendors: any) {
  //   return this.purchaseCollectionList.add(vendors);
  // }
  removePurchase(id) {
    return this.purchaseCollectionList.doc(id).delete();
  } 
  // getOrderList() {
  //   return this.http.get(environment.apiURL + '/Order').toPromise();
  // }

  // getOrderByID(id:number):any {
  //   return this.http.get(environment.apiURL + '/Order/'+id).toPromise();
  // }

  // deleteOrder(id:number) {
  //   return this.http.delete(environment.apiURL + '/Order/'+id).toPromise();
  // }
}
