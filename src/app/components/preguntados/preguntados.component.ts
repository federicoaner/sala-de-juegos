import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {


  //const audioplay = new Audio('/saraza/algo.wav').play();

 //let pruebaAudio : HTMLAudioElement = new Audio('./assets/audio.wav');

 //const audio = require('./assets/song.mp3');
   prueba: HTMLAudioElement = new Audio("./assets/audio.wav");
   
   tocar(){
    this.prueba.play();
   }

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
