
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import {  LookupCatagory } from 'src/Tabels/tabels-list';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
  private lookUpCategoryCollectionList: AngularFirestoreCollection<any>;
  private lookUpCategoryList: Observable<any[]>;
  constructor(db: AngularFirestore) { 
   this.lookUpCategoryCollectionList = db.collection<LookupCatagory>('LookupCatagory');
  }
 create(LookupCatagory) { 
  return this.lookUpCategoryCollectionList.add(LookupCatagory).catch(this.handleError);
}
getAllLookUpCategory() {
  this.lookUpCategoryList = this.lookUpCategoryCollectionList.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
  return this.lookUpCategoryList;
}
getCategory(id) {
  return this.lookUpCategoryCollectionList.doc<any>(id).valueChanges();
}
updateCategory(categoryObj: LookupCatagory, id: string) {
  return this.lookUpCategoryCollectionList.doc(id).update(categoryObj)
  .catch(this.handleError);
}
addCategory(categoryObj: any) {
  return this.lookUpCategoryCollectionList.add(categoryObj)
  .catch(this.handleError);
}
removeCategory(id) {
  return this.lookUpCategoryCollectionList.doc(id).delete()
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

