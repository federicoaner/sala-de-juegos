import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  
  
  itemsGuardar : any;
  items : Observable<any[]>;

  constructor(public db:AngularFirestore) { 
 
   this.itemsGuardar = db.collection('/chats')
   this.items = db.collection('/chats').valueChanges();
  }



  enviarMensaje(mensaje : string, user : string){
    this.itemsGuardar.add({
      name : user,
      message : mensaje,
      time : new Date().toLocaleTimeString()
    })
  }


}

