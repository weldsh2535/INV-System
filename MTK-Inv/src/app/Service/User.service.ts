import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userCollectionList: AngularFirestoreCollection<any>;
  private userRoleList: Observable<User[]>;
  //db: any;
  constructor(private db: AngularFirestore) { 
    this.userCollectionList = db.collection<User>('user');
  
   }
   
   create(user) { 
    return this.userCollectionList.add(user);
  }

}
