import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.scss']
})
export class MayormenorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.comenzar();
  }

  puntaje : number = 0;
  numeroAnterior : number = 0;
  numeroSiguiente : number = 0;
  bandera : boolean  =false;
  perdio:boolean=false;
  comienzo:boolean=false;
  mensaje:string ="";
  numeros:number[]=[1,2,3,4,5,6,7,8,9,10];


  comenzar() {
    this.numeroSiguiente = Math.round(Math.random() *  this.numeros.length);
    this.puntaje = 0;
    this.numeroAnterior = Math.round(Math.random() * this.numeros.length);
  
   this.comienzo=true;
   this.perdio=false;
  }

  btnMayor() {
    if(this.numeroSiguiente >= this.numeroAnterior){
      this.puntaje++;
      this.numeroAnterior = this.numeroSiguiente;
      this.numeroSiguiente = Math.round(Math.random() * this.numeros.length);
    } 
    
    else{
    
     alert("Perdiste el numero secreto era Menor");
    
      this.comenzar();
      this.perdio=true;
      this.comienzo=false;
    }
  }

  btnMenor(){
    if(this.numeroSiguiente <= this.numeroAnterior){
      this.puntaje++;
      this.numeroAnterior = this.numeroSiguiente;
      this.numeroSiguiente = Math.round(Math.random() * this.numeros.length); 
    }
    
    else{
    
     alert("Perdiste el numero era Mayor");
     this.comenzar();
     this.perdio=true;
     this.comienzo=false;
     
    }
  }




}
