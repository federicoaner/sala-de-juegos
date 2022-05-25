import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/sericios/toaster.service';
import { PuntajeService } from 'src/app/sericios/puntaje.service';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { UsuarioPuntuaje } from 'src/app/entidades/usuario-puntuaje';






@Component({
  selector: 'app-juego-audioperceptiva',
  templateUrl: './juego-audioperceptiva.component.html',
  styleUrls: ['./juego-audioperceptiva.component.scss']



})
export class JuegoAudioperceptivaComponent implements OnInit {


  // prueba: HTMLAudioElement = new Audio("./assets/audio.wav");
  prueba: HTMLAudioElement = new Audio("./assets/mayor.wav");

  acordeMayor: HTMLAudioElement = new Audio("./assets/mayor.wav");
  acordeMenor: HTMLAudioElement = new Audio("./assets/menor.wav");
  acordeDisminuido: HTMLAudioElement = new Audio("./assets/disminuido.wav");
  quitoPRIMERO: HTMLAudioElement = new Audio("./assets/V-I.wav");
  cuartoPRIMERO: HTMLAudioElement = new Audio("./assets/IV-I.wav");
  sextoPRIMERO: HTMLAudioElement = new Audio("./assets/VI-I.wav");

  contador: number = 1;
  titulo: string = '';
  pregunta: string = '';
  btnPregunta: string = '';
  opcion1: string = '';
  opcion2: string = '';
  opcion3: string = '';
  opcion4: string = '';
  tocarPregunta: any = '';
  tocarAcorde: any;
  queTocar: any;
  ejemplo1: any;
  ejemplo2: any;
  ejemplo3: any;
  textoEj1: string = ' EJ: mayor';
  textoEj2: string = 'EJ: menor';
  textoEj3: string = 'EJ: dismi';
  textoEj4: string = ' EJ: IV-I';
  textoEj5: string = 'EJ: V-I';
  textoEj6: string = 'EJ: VII-I';

  tocado1: boolean;
  tocado2: boolean;
  tocado3: boolean;
  tocado4: boolean;
  tocado5: boolean;
  tocado6: boolean;
  comienzo = false;
  puntajeAcumulado: number;

  respuestaCorrecta: number = 0;

  tocarMayor() {
    this.acordeMayor.play();

  }
  tocarMenor() {
    this.acordeMenor.play();
  }

  comenzar() {
    this.comienzo = true;


  }


  pregunta1: string[] = ['Nivel I', '¿Que tipo de acorde suena?','Mayor ','Menor ','Disminuido ', '1'];

  pregunta2: string[] = ['Nivel II','¿que tipo de acorde suena?','Mayor','Menor','Disminuido','2'];

  pregunta3: string[] = ['Nivel III','¿que tipo de Cadencia Suena?','IV-I','V-I','VI-V','2'];


  constructor(private toast: ToasterService, private puntajeGuardar: PuntajeService, private usuario: LoginUserService) {
    this.tocado1 = false; this.tocado2 = false; this.tocado3 = false;
    this.tocado4 = false; this.tocado5 = false; this.tocado6 = false;
    //this.puntajeAcumulado = 0;

    let  dato : any= localStorage.getItem(usuario.logged.email);

    if(dato==null ){

      this.puntajeAcumulado=0;
    }else{

    let algo= JSON.parse(dato);
    
    this.puntajeAcumulado= algo.puntuacion;
    }

    
  }

  Llamador() {

    if (this.contador == 1) {
      this.tocarMayor();


    } else if (this.contador == 2) {
      this.tocarMenor();
    }
    else if (this.contador == 3) {
      this.quitoPRIMERO.play();
    }

  }

  ngOnInit(): void {

    setTimeout(() => {

      this.armarPregunta();
    }, 800);

  }


  armarEjemplo(tipoEjemplo: number) {

    switch (tipoEjemplo) {
      case 1:

        this.acordeMayor.play();
        this.tocado1 = true;
        break;

      case 2:
        this.acordeMenor.play();
        this.tocado2 = true;
        break;

      case 3:
        this.acordeDisminuido.play();
        this.tocado3 = true;
        break;

      case 4:
        this.cuartoPRIMERO.play();
        this.tocado4 = true;
        break;

      case 5:
        this.quitoPRIMERO.play();
        this.tocado5 = true;
        break;

      case 6:
        this.sextoPRIMERO.play();
        this.tocado6 = true;
        break;


    }
  }


  armarPregunta() {

    switch (this.contador) {
      case 1:

        if (this.tocado1 && this.tocado2 && this.tocado3) {
          this.acordeMayor.play();
        }
        this.titulo = this.pregunta1[0];
        this.pregunta = this.pregunta1[1];
        this.opcion1 = this.pregunta1[2];
        this.opcion2 = this.pregunta1[3];
        this.opcion3 = this.pregunta1[4];

        this.respuestaCorrecta = parseInt(this.pregunta1[5]);
        break;

      case 2:

        this.acordeMenor.play();
        this.titulo = this.pregunta2[0];
        this.pregunta = this.pregunta2[1];
        this.opcion1 = this.pregunta2[2];
        this.opcion2 = this.pregunta2[3];
        this.opcion3 = this.pregunta2[4];

        this.respuestaCorrecta = parseInt(this.pregunta2[5]);
        break;

      case 3:

        this.quitoPRIMERO.play();
        this.titulo = this.pregunta3[0];
        this.pregunta = this.pregunta3[1];
        this.opcion1 = this.pregunta3[2];
        this.opcion2 = this.pregunta3[3];
        this.opcion3 = this.pregunta3[4];
        console.log(this.opcion2);

        this.respuestaCorrecta = parseInt(this.pregunta3[5]);
        break;

      case 4:
        this.gano();
        break;
    }
  }

  validarRespuesta(opcion: number) {

    if (opcion == this.respuestaCorrecta) {

      this.contador++;
      this.armarPregunta();
    } else {
      this.perdio();
    }
  }



  gano() {
    this.contador = 1;
    this.armarPregunta();
    this.toast.mostrarToastSuccess('Bien!!!', 'Ganaste!');
    

    this.puntajeAcumulado += 10;


    let usuarioActual:any=this.usuario.logged.email;
    let juego="Preguntados";
    let horaActual=  "hora:  " +  new Date().toLocaleTimeString() + "  dia: " + new Date().toLocaleDateString();

    let usuarioGuardar:any=new UsuarioPuntuaje(usuarioActual,this.puntajeAcumulado,horaActual);
    localStorage.setItem(this.usuario.logged.email, JSON.stringify(usuarioGuardar));




    setTimeout(() => {
    
    }, 1000);
    this.comienzo = false;
    this.tocado1 = false; this.tocado2 = false; this.tocado3 = false;
    this.tocado4 = false; this.tocado5 = false; this.tocado6 = false;



  }


  perdio() {
    this.contador = 1;
    this.armarPregunta();
    this.toast.mostrarToast('Volve a intentar!', 'Perdiste!');
   

   
    setTimeout(() => {
     
    }, 1000);
    this.comienzo = false;

    this.tocado1 = false; this.tocado2 = false; this.tocado3 = false;
    this.tocado4 = false; this.tocado5 = false; this.tocado6 = false;

  }



}//fin clase
