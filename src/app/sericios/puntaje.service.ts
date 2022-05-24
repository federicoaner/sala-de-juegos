import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UsuarioPuntuaje } from '../entidades/usuario-puntuaje';
import { Puntajes } from '../entidades/puntajes';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  puntajeCollection:any;

  puntajes:any;

  constructor(private firestore:AngularFirestore) {

    this.puntajeCollection=this.firestore.collection<UsuarioPuntuaje>('puntajes');
    this.puntajes=this.puntajeCollection.valueChanges({idField: 'id'});


   }


   getPuntajes(){

    return this.puntajes;
   }

   agregarPuntajes(object:UsuarioPuntuaje){

    this.firestore.collection('puntajes').add(object);
   }

   getPuntajeMail(puntajes: any) {
    return this.firestore.collection("puntajes", ref => ref.where('mail', '==', puntajes.mail)).snapshotChanges();
  }

  async obtenerDocumentoPizza(pizza: any) {
    var value = await this.firestore.collection('puntajes').ref.where('mail', '==', pizza.mail).get();
    console.log("value", value);
    if (value.docs[0].exists) {
      return value.docs[0].id;
    }
    else {
      return null;
    }
  }

   modificarPuntaje(object : UsuarioPuntuaje, id : any){
   
    console.log("modificado");
    return this.firestore.collection('puntajes').doc(id).update(object);

   
  }









}
