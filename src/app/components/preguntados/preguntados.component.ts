import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ToasterService } from 'src/app/sericios/toaster.service';
import { ApiBanderasService } from 'src/app/sericios/api-banderas.service';
import { PuntajeService } from 'src/app/sericios/puntaje.service';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { UsuarioPuntuaje } from 'src/app/entidades/usuario-puntuaje';
import { user } from '@angular/fire/auth';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  titulo : string = '';
  pregunta : string = '';
  opcion1 : string = '';
  opcion2 : string = '';
  opcion3 : string = '';
  opcion4 : string = '';
  contador : number = 1;
  respuestaCorrecta : number = 0;
  banderas : any;
  imgPregunta : any;
  pais : any;
  comienzo=false;
  puntajeAcumulado:number;

  
  @Output() puntajeOutput: EventEmitter<any>= new EventEmitter<any>();

  pregunta1 : string[] = ['Paises','¿Cuantos millones de habitantes tiene Argentina?','60 ','45 ','30 ','65',  '2'];

  pregunta2 : string[] = ['Paises','¿cuantos mundiales gano brasil?','3','1','2','5','4'];

  pregunta3 : string[] = ['Paises', '¿Cual es la capital de Colombia?','Medellin','Paris','Bogota','Cartagena','3'];

  pregunta4: string[] = ['Paises','¿Cuantas copas del mundo se realizaron en mexico ?','1','2','3','4','2'];

  pregunta5: string[] = ['Paises','¿A que pais pertenece esta bandera?','Reino Unido','Canada','Islas caiman','Australia','4'];


    constructor(private toast: ToasterService, private api :ApiBanderasService,private puntajeGuardar : PuntajeService,private usuario:LoginUserService) {
      
      this.api.getPaises().subscribe((flags : any) =>{
        this.banderas = flags;
        console.log(this.banderas)
      });
      
      
    let  dato : any= localStorage.getItem(usuario.logged.email);
   
    

      if(dato==null ){

        this.puntajeAcumulado=0;
      }else{

      let algo= JSON.parse(dato);
      
      this.puntajeAcumulado= algo.puntuacion;
      }
      
  
    
    }


 ngOnInit(): void {

  setTimeout(() => {
    this.armarPregunta();
  },800);

}

 comenzar(){
    this.comienzo=true;

  
 }

 armarPregunta(){

  switch (this.contador){
    case 1:
        this.pais = this.banderas[0];
        this.imgPregunta = this.pais.flag;
        this.titulo = this.pregunta1[0];
        this.pregunta = this.pregunta1[1];
        this.opcion1 = this.pregunta1[2];
        this.opcion2 = this.pregunta1[3];
        this.opcion3 = this.pregunta1[4];
        this.opcion4 = this.pregunta1[5];
        this.respuestaCorrecta = parseInt(this.pregunta1[6]);
      break;
    case 2: 
        this.pais = this.banderas[1];
        this.imgPregunta = this.pais.flag;
        this.titulo = this.pregunta2[0];
        this.pregunta = this.pregunta2[1];
        this.opcion1 = this.pregunta2[2];
        this.opcion2 = this.pregunta2[3];
        this.opcion3 = this.pregunta2[4];
        this.opcion4 = this.pregunta2[5];
        this.respuestaCorrecta = parseInt(this.pregunta2[6]);
      break;
    case 3: 
        this.pais = this.banderas[2];
        this.imgPregunta = this.pais.flag;
        this.titulo = this.pregunta3[0];
        this.pregunta = this.pregunta3[1];
        this.opcion1 = this.pregunta3[2];
        this.opcion2 = this.pregunta3[3];
        this.opcion3 = this.pregunta3[4];
        this.opcion4 = this.pregunta3[5];
        this.respuestaCorrecta = parseInt(this.pregunta3[6]);
      break;
    case 4: 
        this.pais = this.banderas[3];
        this.imgPregunta = this.pais.flag;
        this.titulo = this.pregunta4[0];
        this.pregunta = this.pregunta4[1];
        this.opcion1 = this.pregunta4[2];
        this.opcion2 = this.pregunta4[3];
        this.opcion3 = this.pregunta4[4];
        this.opcion4 = this.pregunta4[5];
        this.respuestaCorrecta = parseInt(this.pregunta4[6]);
      break;
    case 5: 
        this.pais = this.banderas[4];
        this.imgPregunta = this.pais.flag;
        this.titulo = this.pregunta5[0];
        this.pregunta = this.pregunta5[1];
        this.opcion1 = this.pregunta5[2];
        this.opcion2 = this.pregunta5[3];
        this.opcion3 = this.pregunta5[4];
        this.opcion4 = this.pregunta5[5];
        this.respuestaCorrecta = parseInt(this.pregunta5[6]);
      break;
    case 6: 
        this.gano();
      break;
  }
}


validarRespuesta(opcion : number){

  if(opcion == this.respuestaCorrecta){
          
    this.contador++;
    this.armarPregunta();
  }else{
    this.perdio();
  }
}

gano(){
  this.contador = 1;
  this.armarPregunta();
  this.toast.mostrarToastSuccess  ('Bien!!!', 'Ganaste!');
  
  
    this.puntajeAcumulado+=10;

    let usuarioActual:any=this.usuario.logged.email;
    let juego="Preguntados";
    let horaActual=  "hora:  " +  new Date().toLocaleTimeString() + "  dia: " + new Date().toLocaleDateString();

    let usuarioGuardar:any=new UsuarioPuntuaje(usuarioActual,this.puntajeAcumulado,horaActual);
    localStorage.setItem(this.usuario.logged.email, JSON.stringify(usuarioGuardar));

  setTimeout(() => {
    this.comienzo=false;
  },1000);
  
}

perdio(){
  this.contador = 1;
  this.armarPregunta();
  this.toast.mostrarToast('Volve a intentar!', 'Perdiste!');
  setTimeout(() => {
    this.comienzo=false;
  },800);
}


}


