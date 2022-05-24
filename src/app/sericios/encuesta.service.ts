import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  encuestaColection:any;

  encuesta:any;

  constructor(private firestore:AngularFirestore) {

    this.encuestaColection=this.firestore.collection('encuesta');
    this.encuesta=this.encuestaColection.valueChanges();

   }


   

   getEncuesta(){

    return this.encuesta;
   }

   agregarEncuesta(object:any){

    this.firestore.collection('encuesta').add(object);
   }

}
