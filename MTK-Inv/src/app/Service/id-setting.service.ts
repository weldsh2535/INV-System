import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { IdSetting } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class IdSettingService {

  private idSettingCollectionList: AngularFirestoreCollection<any>;
  private idSettingList: Observable<IdSetting[]>;
  
  constructor(private db: AngularFirestore) { 
   this.idSettingCollectionList = db.collection<IdSetting>('IdSetting');
  }
 create(idSetting) { 
  return this.idSettingCollectionList.add(idSetting);
}
getIDSetting(id :string)
{
  const idSettingObj =  this.db.collection('IdSetting', ref => ref.where('voucherTypeId','==',  id )).snapshotChanges();
  this.idSettingList= idSettingObj.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as IdSetting;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.idSettingList;
}
getAllIdSetting() {
  this.idSettingList = this.idSettingCollectionList.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
  return this.idSettingList;
}
getID(id) {
  return this.idSettingCollectionList.doc<any>(id).valueChanges();
}
updateIdSetting(IdSettings:IdSetting, id:string){
return this.idSettingCollectionList.doc(id).update(IdSettings);
}
removeIdSetting(id) {
  return this.idSettingCollectionList.doc(id).delete();
}
}
