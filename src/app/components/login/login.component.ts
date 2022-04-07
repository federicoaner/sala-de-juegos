import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'sala-de-juegos';

  miusuario:Usuario;

  constructor (){
    this.miusuario=new Usuario;
  }


  mostrar():void{

    console.info(this.miusuario);
  }


  //constructor() { }

  ngOnInit(): void {
  }

  

}
