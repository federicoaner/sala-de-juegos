import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  preguntadosClick=false;


 @Input() puntaje:any;

  constructor() { 

    


  }

  ngOnInit(): void {
  }


  recibirPuntaje(puntaje:any){
    console.log(this.puntaje);
  }

  btnPreguntados(){
    return this.preguntadosClick=true;
  }

}
