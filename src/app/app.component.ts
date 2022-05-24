import { Component } from '@angular/core';
import { Usuario } from './entidades/usuario';
import { LoginUserService } from './sericios/login-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PuntajeLocalStorajeService } from './sericios/puntaje-local-storaje.service';
import { UsuarioPuntuaje } from './entidades/usuario-puntuaje';
import { PuntajeService } from './sericios/puntaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sala-de-juegos';
  mail:string;
 // puntajeAcumulado:number;

  

  constructor (public usuario:LoginUserService,private auth:AngularFireAuth,private router:Router,public mailLocal:PuntajeLocalStorajeService,private puntajeFire :PuntajeService ){
    
   
    this.mail=this.usuario.logged.mail;



  }

  ngOnInit(): void {
   
    
  
  }

  Logout(){

   
    let  dato : any= localStorage.getItem(this.usuario.logged.email);

 if(dato!=null){

  let algo= JSON.parse(dato);
   let puntajeAcumulado= algo.puntuacion;

  

   let usuarioActual:any=this.usuario.logged.email;
   
   let horaActual= new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString() ;

   let usuarioGuardar:any=new UsuarioPuntuaje(usuarioActual,puntajeAcumulado,horaActual);
  console.log(usuarioGuardar);
  this.puntajeFire.agregarPuntajes({...usuarioGuardar});

 
  
 }
    

   
   localStorage.clear();

 

    this.auth.signOut();
    this.router.navigateByUrl('login');

  }

 





}
