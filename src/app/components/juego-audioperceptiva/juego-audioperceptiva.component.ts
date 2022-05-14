import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-audioperceptiva',
  templateUrl: './juego-audioperceptiva.component.html',
  styleUrls: ['./juego-audioperceptiva.component.scss']
})
export class JuegoAudioperceptivaComponent implements OnInit {


  prueba: HTMLAudioElement = new Audio("./assets/audio.wav");
   
  tocar(){
   this.prueba.play();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
