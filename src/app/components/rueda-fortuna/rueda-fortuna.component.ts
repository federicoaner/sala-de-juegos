import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/sericios/toaster.service';

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
puntos:number;

  constructor(private toastr:ToasterService) {
 
    this.random1=Math.floor(Math.random() * 6) + 1;
  this.random2 = Math.floor(Math.random() * 6) + 1;
  
  this.jugarBandera=false;
  this.reiniciarBandera=false;
  this.puntos=0;
 
   }




jugar(){
  this.random1=Math.floor(Math.random() * 6) + 1;
  this.random2 = Math.floor(Math.random() * 6) + 1;
  console.log("hola");




if ( this.random1 > this.random2){


this.puntos+=10;


 setTimeout(() => {
  this.nroImagen1=this.random1;
  this.nroImagen2=this.random2;

 

 }, 1000);

this.toastr.mostrarToastSuccess ("Ganaste!","!!!")
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
