import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { userRole } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private userRoleCollectionList: AngularFirestoreCollection<any>;
  private userRoleList: Observable<userRole[]>;
  //db: any;
  constructor(private db: AngularFirestore) { 
    this.userRoleCollectionList = db.collection<userRole>('userRole');
  
   }
   
   create(userR) { 
    return this.userRoleCollectionList.add(userR);
  }

}
