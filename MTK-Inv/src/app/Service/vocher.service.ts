import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, combineLatest, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { Customer, Items, Vocher, vocherTransation } from 'src/Tabels/tabels-list';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { uniq, flatten } from 'lodash'
@Injectable({
  providedIn: 'root'
})
export class VocherService {
  private vocherCollectionList: AngularFirestoreCollection<any>;
  private vocherList: Observable<Vocher[]>;
  lineItems: any[];
  listOfItems: any[];
  success: any;
  joined$: Observable<any>
  listOfCustomer: Customer;
  constructor(private db: AngularFirestore) {
    this.vocherCollectionList = db.collection<Vocher>('Vocher');
  }
  create(Vocher) {

    return this.vocherCollectionList.add(Vocher)
      .catch(this.handleError);
  }
  getVocherTypId(id: string) {
    const voucherListObj = this.db.collection('Vocher', ref => ref.where('vocherTypeId', '==', id)).snapshotChanges();
    this.vocherList = voucherListObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Vocher;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.vocherList;
  }
  getVocherVonderById(vendor: string) {
    const voucherListObj = this.db.collection('Vocher', ref => ref.where('vendor', '==', vendor)).snapshotChanges();
    this.vocherList = voucherListObj.pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Vocher;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.vocherList;
  }
  getAllVoucherItems() {
    this.joined$ = this.db.collection<vocherTransation>('vocherTransation').valueChanges()
      .pipe(
        switchMap(voucherTransactions => {
          const ItemID = uniq(voucherTransactions.map(bp => bp.ItemID))
          return combineLatest(
            of(voucherTransactions),
            combineLatest(
              ItemID.map(ItemID =>
                this.db.collection<Items>('items', ref => ref.where('id', '==', ItemID)).valueChanges().pipe(
                  map(items => items[0])
                )
              )
            )
          )
        }),
        map(([voucherTransactions, items]) => {

          return voucherTransactions.map(voucherTransaction => {
            return {
              ...voucherTransaction,
              author: items.find(a => a.id === voucherTransaction.ItemID)
            }
          })
        })
      )
  }
  getAllVocher() {
    this.vocherList = this.vocherCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    ).catch(this.handleError);
    return this.vocherList;
  }
  updateVocher(vocherObj: Vocher, id: string) {
    return this.vocherCollectionList.doc(id).update(vocherObj)
      .catch(this.handleError);
  }
  getVocher(id) {
    return this.vocherCollectionList.doc<any>(id).valueChanges()
      .catch(this.handleError);
  }
  addVocher(vendors: any) {
    return this.vocherCollectionList.add(vendors)
      .catch(this.handleError);
  }
  removeVocher(id) {
    return this.vocherCollectionList.doc(id).delete()
      .catch(this.handleError);
  }
  calcBalance(updateBalance:number):number{
    //console.log(updateBalance);
    return updateBalance;  
}
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}

