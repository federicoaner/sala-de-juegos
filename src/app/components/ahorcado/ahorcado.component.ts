import { Component, OnInit } from '@angular/core';
import { arrayRemove } from 'firebase/firestore';
import { ToasterService } from 'src/app/sericios/toaster.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  //letra:string=" ";

  palabras: string[] | any = ['casa', 'perro', 'gato', 'leon','auto'];
  palabraRandom: string = "";
  palabraGuiones: string[] = [];
  error: number = 0;
  flag: boolean = false;
  empezo: boolean = false;
  gano: boolean = false;
  perdio: boolean = false;
  aciertos = 0;
  mensaje:string="";
  nroImagen:number=0;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private toaster:ToasterService) {
    //this.palabraGuiones="";
  }

  ngOnInit(): void {
    //this.comenzar();
  }


  comenzar() {

    this.palabraRandom = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraGuiones = Array(this.palabraRandom.length).fill('_');
    this.empezo = true;
    this.gano = false;
    this.perdio = false;
    this.flag = false;
    this.nroImagen=0;

    this.error = 0;
  }


  tomarLetra(letra: string) {

    console.log(this.palabraRandom);

    if (this.empezo) {
      for (let i = 0; i < this.palabraRandom.length; i++) {
        if (letra.toLowerCase() == this.palabraRandom[i]) {
          this.palabraGuiones[i] = letra;
         this.flag = true;
          this.aciertos++;
          //this.letras.splice(1,1,letra); ver como borrar letra acertadaseleccionada
        }
      }


      if (!this.flag) {
        this.error++;
        this.nroImagen++;
      }

      if (this.aciertos == this.palabraRandom.length) { //GANO

        setTimeout(() => {
          this.gano = true;
          console.log('Ganaste!!!!');

          this.empezo = false;

          this.error = 0;
          this.aciertos = 0;
         //alert("Ganaste");
         this.toaster.mostrarToastSuccess("Ganaste","Acertaste la Palabra!!!");

        }, 1000);


      }

      if (this.error == 6) { //Perdio

        setTimeout(() => {

          this.perdio = true;
          this.mensaje="perdiste";
          this.empezo = false;
          this.error = 0;
          this.aciertos = 0;
          this.toaster.mostrarToastFail("Perdiste!","volve a intentar!");
        //  alert("perdiste");
          this.nroImagen=0;


        }, 1000);

      }

    }

    console.log(this.error);
  }




}
