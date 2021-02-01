import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Vendors } from 'src/Tabels/tabels-list';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  private vendorCollectionList:AngularFirestoreCollection<any>;
  private vendorList:Observable<any[]>;
  //readonly APIUrl="http://localhost:58089/api";
  constructor(private db:AngularFirestore){
    this.vendorCollectionList = db.collection<Vendors>('Vendors');
  }
  create(Vendors) { 
    return this.vendorCollectionList.add(Vendors);
  }
  // addVendor(val:Object):Observable<Object>{
  //   return this.http.post(this.APIUrl+'/Vendor',val);
  //   }
  //   getAllVendors():Observable<any[]>{
  //  return this.http.get<any>(this.APIUrl+'/Vendor');
  //   }
  getAllVendor() {
    this.vendorList = this.vendorCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.vendorList;
  }
  getVendorById(id:string){
     const vendorObj =  this.db.collection('Vendors', ref => ref.where('id','==',  id )).snapshotChanges();
    this.vendorList= vendorObj.pipe(
     map(changes => changes.map(a => {
       const data = a.payload.doc.data() as Vendors;
       const id = a.payload.doc.id;
       return { id, ...data };
     }))
   ).catch(this.handleError);
    return this.vendorList;
  }
  updateVendor(Vendors:any, id: string) {
    return this.vendorCollectionList.doc(id).update(Vendors);
  }
  getVendor(id) {
    return this.vendorCollectionList.doc<any>(id).valueChanges();
  }
  addSupplier(vendors: any) {
    return this.vendorCollectionList.add(vendors);
  }
  removeVendor(id) {
    return this.vendorCollectionList.doc(id).delete();
  } 
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
