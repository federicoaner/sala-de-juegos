import { Component } from '@angular/core';
import { Usuario } from './entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sala-de-juegos';

  miusuario:Usuario;

  constructor (){
    this.miusuario=new Usuario;
  }


  mostrar():void{

    console.info(this.miusuario);
  }





}
