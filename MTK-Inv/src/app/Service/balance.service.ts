import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { balance } from 'src/Tabels/tabels-list';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balanceCollectionList: AngularFirestoreCollection<any>;
  private balanceList: Observable<any[]>;
  constructor(private db: AngularFirestore) { 
   this.balanceCollectionList = db.collection<balance>('balance');
  }

 create(balance) { 
  return this.balanceCollectionList.add(balance)
  .catch(this.handleError);
}
getBalanceByItemId(itemId :string)
{
  const lookupObject =  this.db.collection('balance', ref => ref.where('itemId','==',  itemId )).snapshotChanges();
  this.balanceList= lookupObject.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as balance;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 ).catch(this.handleError);
  return this.balanceList;
}
// getBalanceById(id:string){
//   const balanceObj= this.db.collection('balance',ref =>ref.where('customer','==',id)).snapshotChanges();
//   this.balanceList=balanceObj.pipe(
//     map(changes =>changes.map(a=>{
//       const data = a.payload.doc.data() as balance;
//       const id = a.payload.doc.id;
//       return {id, ...data};
//     }))
//   ).catch(this.handleError);
//   return this.balanceList;
// }
getAllBalance() {
  this.balanceList = this.balanceCollectionList.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  ).catch(this.handleError);
  return this.balanceList;
}
updateBalance(balance: any, id: string) {
  return this.balanceCollectionList.doc(id).update(balance)
  .catch(this.handleError);
}
private handleError(error: Response) {
  if (error.status === 400)
    return Observable.throw(new BadInput(error.json()));

  if (error.status === 404)
    return Observable.throw(new NotFoundError());
  
  return Observable.throw(new AppError(error));
}

}
