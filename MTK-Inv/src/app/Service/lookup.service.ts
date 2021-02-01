import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Lookup } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private lookupCollectionList: AngularFirestoreCollection<any>;
  private lookupsList: Observable<Lookup[]>;
  constructor(private db: AngularFirestore) { 
   this.lookupCollectionList = db.collection<Lookup>('lookup');
 
  }

 create(Category) { 
  return this.lookupCollectionList.add(Category);
  //return this.db.list('/Category').push(Category);
}
getAllLookUp() {
  this.lookupsList = this.lookupCollectionList.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
  return this.lookupsList;
}
getLookUpByType(type :string)
{
  const lookupobject =  this.db.collection('lookup', ref => ref.where('type','==',  type )).snapshotChanges();
  this.lookupsList= lookupobject.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as Lookup;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.lookupsList;
}
getLookupByName(name :string)
{
  const lookupobject =  this.db.collection('lookup', ref => ref.where('name','==',  name )).snapshotChanges();
  this.lookupsList= lookupobject.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as Lookup;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.lookupsList;
}
getLookup(id) {
  return this.lookupCollectionList.doc<any>(id).valueChanges();
}

updateLookup(lookupObj: Lookup, id: string) {
  return this.lookupCollectionList.doc(id).update(lookupObj);
}
removeLookup(id) {
  return this.lookupCollectionList.doc(id).delete();
}
}

