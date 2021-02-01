import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginUser(
    email:string,
    password:string
  ):Promise<firebase.auth.UserCredential>{
    return firebase.auth().signInWithEmailAndPassword(email,password);
 }
 signUpUser(
   email:string,
   password:string
 ):Promise<any>{
   return firebase.auth().createUserWithEmailAndPassword(email,password);
 }
resetPassword(email:string):Promise<void>{
  return firebase.auth().sendPasswordResetEmail(email);
}
logOutUser():Promise<void>{
  return firebase.auth().signOut();
}


}
