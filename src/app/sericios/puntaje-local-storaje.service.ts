import { Injectable } from '@angular/core';
import { LoginUserService } from './login-user.service';

@Injectable({
  providedIn: 'root'
})
export class PuntajeLocalStorajeService {

   dato:any;

  constructor(public usuario:LoginUserService) {

    this.dato= localStorage.getItem(this.usuario.logged.email);
   // console.log("desde servicio" + this.dato);


   }

   getMail(){
     return this.dato;
   }


}
