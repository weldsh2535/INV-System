import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { vocherTransation } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class VoucherTransationService {
  private vochertransationCollectionList:AngularFirestoreCollection<any>;
  private vocherTransationList:Observable<any[]>;
  constructor(db:AngularFirestore) { 
    this.vochertransationCollectionList=db.collection<vocherTransation>('vocherTransation');
  }
  create(vocherTransation) { 

    return this.vochertransationCollectionList.add(vocherTransation);
  }
 
  getAllVocher() {
    this.vocherTransationList = this.vochertransationCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.vocherTransationList;
  }
  updateVocherTransation(vocherTransationObj:vocherTransation, id: string) {
    return this.vochertransationCollectionList.doc(id).update(vocherTransationObj);
  }
  getVocherTransation(id) {
    return this.vochertransationCollectionList.doc<any>(id).valueChanges();
  }
  addVocherTransation(vendors: any) {
    return this.vochertransationCollectionList.add(vendors);
  }
  removeVocherTransation(id) {
    return this.vochertransationCollectionList.doc(id).delete();
  } 
}
