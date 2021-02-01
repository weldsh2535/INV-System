import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ItemCategory } from 'src/Tabels/tabels-list';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoryService {

  private itemCategoryCollectionList: AngularFirestoreCollection<any>;
  private categorysList: Observable<any[]>;
  constructor(db: AngularFirestore) { 
   this.itemCategoryCollectionList = db.collection<ItemCategory>('ItemCategory');
 
  }

 create(ItemCategory) { 
  return this.itemCategoryCollectionList.add(ItemCategory)
  .catch(this.handleError);
}
getAllItemCategories() {
  this.categorysList = this.itemCategoryCollectionList.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
  return this.categorysList;
}
getItemCategory(id) {
  return this.itemCategoryCollectionList.doc<any>(id).valueChanges();
}
updateItemCategory(itemCategoryObj: ItemCategory, id: string) {
  return this.itemCategoryCollectionList.doc(id).update(itemCategoryObj)
  .catch(this.handleError);
}
removeCategory(id) {
  return this.itemCategoryCollectionList.doc(id).delete()
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