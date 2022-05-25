import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/sericios/toaster.service';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { UsuarioPuntuaje } from 'src/app/entidades/usuario-puntuaje';

@Component({
  selector: 'app-rueda-fortuna',
  templateUrl: './rueda-fortuna.component.html',
  styleUrls: ['./rueda-fortuna.component.scss']
})
export class RuedaFortunaComponent implements OnInit {



nroImagen1:number=6;
nroImagen2:number=6;

random1:number;
random2:number;
jugarBandera:boolean;
reiniciarBandera:boolean;
puntajeAcumulado:number;

  constructor(private toastr:ToasterService,private usuario:LoginUserService) {
 
    this.random1=Math.floor(Math.random() * 6) + 1;
  this.random2 = Math.floor(Math.random() * 6) + 1;
  
  this.jugarBandera=false;
  this.reiniciarBandera=false;
  //this.puntos=0;

  let  dato : any= localStorage.getItem(usuario.logged.email);

  if(dato==null ){

    this.puntajeAcumulado=0;
  }else{

  let algo= JSON.parse(dato);
  
  this.puntajeAcumulado= algo.puntuacion;
  }
 
   }




jugar(){
  this.random1=Math.floor(Math.random() * 6) + 1;
  this.random2 = Math.floor(Math.random() * 6) + 1;
  console.log("hola");




if ( this.random1 > this.random2){


this.puntajeAcumulado+=10;


 setTimeout(() => {
  this.nroImagen1=this.random1;
  this.nroImagen2=this.random2;

 

 }, 1000);

this.toastr.mostrarToastSuccess ("Ganaste!","!!!")

 //Guardar Puntaje

 this.puntajeAcumulado+=10;

         let usuarioActual:any=this.usuario.logged.email;
         let juego="Preguntados";
         let horaActual=  "hora:  " +  new Date().toLocaleTimeString() + "  dia: " + new Date().toLocaleDateString();
     
         let usuarioGuardar:any=new UsuarioPuntuaje(usuarioActual,this.puntajeAcumulado,horaActual);
         
     
         localStorage.setItem(this.usuario.logged.email, JSON.stringify(usuarioGuardar));



}
else if (this.random2 > this.random1){

 
 setTimeout(() => {
  this.nroImagen1=this.random1;
  this.nroImagen2=this.random2;
 

 }, 1000);

 this.toastr.mostrarToastFail("Perdiste!","tu dado era menor")
}
else {
  setTimeout(() => {
    this.nroImagen1=this.random1;
    this.nroImagen2=this.random2;
    
  
   }, 1000);
   this.toastr.mostrarToastFail("Empate!","!!")
}

//this.reiniciar();
this.jugarBandera=true;

}


reiniciar(){
 
  this.nroImagen1=6;
  this.nroImagen2=6;


}


  ngOnInit(): void {
   // this.jugar();
  }

}
