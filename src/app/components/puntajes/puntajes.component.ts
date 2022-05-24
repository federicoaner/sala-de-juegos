import { Component, OnInit } from '@angular/core';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { PuntajeLocalStorajeService } from 'src/app/sericios/puntaje-local-storaje.service';
import { Observable } from 'rxjs';
import { PuntajeService } from 'src/app/sericios/puntaje.service';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.scss']
})
export class PuntajesComponent implements OnInit {


  listadoPuntajes : Observable<any[]>;

  constructor(public usuario:LoginUserService, public mailLocal:PuntajeLocalStorajeService, private listado:PuntajeService) {

    this.listadoPuntajes=listado.getPuntajes();

    /*
    let dato=this.mailLocal.getMail();
    console.log(dato);
    */
  
  
    
    }

  

   

   



  ngOnInit(): void {



  }

}
