import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/sericios/encuesta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-encuestas',
  templateUrl: './listado-encuestas.component.html',
  styleUrls: ['./listado-encuestas.component.scss']
})
export class ListadoEncuestasComponent implements OnInit {

  listadoEncuestas : Observable<any[]>;

  constructor(public encuesta:EncuestaService) {

    this.listadoEncuestas=encuesta.getEncuesta();
  
    console.log(this.listadoEncuestas)
  }

  ngOnInit(): void {
  }

}
