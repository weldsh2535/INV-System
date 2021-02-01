import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import {  LoginUser } from 'src/Tabels/tabels-list';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private userloginCollectionList: AngularFirestoreCollection<any>;
  uSerNameList: Observable<{ id: number; username: string; password: string;}[]>;
  constructor(private db: AngularFirestore){
    this.userloginCollectionList = db.collection<LoginUser>('LoginUser');
  }
  UserLogin(UserLogin :LoginUser)
{
  const profileList =  this.db.collection('login', ref => ref.where('username','==', UserLogin.password ).where('Active','==', true).where('username','==', UserLogin.username) ).snapshotChanges();
  this.uSerNameList= profileList.pipe(
   map(changes => changes.map(a => {
     const data = a.payload.doc.data() as LoginUser;
     const id = a.payload.doc.id;
     return { id, ...data };
   }))
 );
  return this.uSerNameList;
}
create(LoginUser) { 
  return this.userloginCollectionList.add(LoginUser);
  //return this.db.list('/Category').push(Category);
}
updateLoginUser(LoginUser: LoginUser, id: string) {
  return this.userloginCollectionList.doc(id).update(LoginUser);
}

}
