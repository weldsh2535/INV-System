import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { LookupCatagory } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class LookupCatagoryService {
  private lookupCatagoryCollectionList: AngularFirestoreCollection<any>;
  private lookupCatagoryList: Observable<LookupCatagory[]>;
  
  constructor(private db: AngularFirestore) { 
   this.lookupCatagoryCollectionList = db.collection<LookupCatagory>('LookupCatagory');
 
  }

 create(Category) { 
  return this.lookupCatagoryCollectionList.add(Category);
  //return this.db.list('/Category').push(Category);
}
getAllLookupCatagory() {
   
  this.lookupCatagoryList = this.lookupCatagoryCollectionList.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
  return this.lookupCatagoryList;
}

getLookupByType(id :string)
{
  const lookUpObject =  this.db.collection('LookupCatagory', ref => ref.where('type','==',  id )).snapshotChanges();
  this.lookupCatagoryList= lookUpObject.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as LookupCatagory;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.lookupCatagoryList;
}
getLookUpByName(name :string)
{
  const lookUpObject =  this.db.collection('lookup', ref => ref.where('name','==',  name )).snapshotChanges();
  this.lookupCatagoryList= lookUpObject.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as LookupCatagory;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.lookupCatagoryList;
}
getLookUpCatagory(id) {
  return this.lookupCatagoryCollectionList.doc<any>(id).valueChanges();
}

updateLookUpCatagory(lookupCatagoryObj: LookupCatagory, id: string) {
  return this.lookupCatagoryCollectionList.doc(id).update(lookupCatagoryObj);
}
removeLookupCatagory(id) {
  return this.lookupCatagoryCollectionList.doc(id).delete();
}
}
