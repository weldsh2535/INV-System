import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { functionality } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  private functionalityCollectionList: AngularFirestoreCollection<any>;
  private functionlityList: Observable<functionality[]>;
  //db: any;
  constructor(private db: AngularFirestore) { 
    this.functionalityCollectionList = db.collection<functionality>('functionality');
   }
   
   create(functionality) { 
    return this.functionalityCollectionList.add(functionality);
  }

}
