import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBanderasService {

  url:string= 'https://restcountries.com/v2/alpha?codes=arg,br,col,mex,aus';


  
  constructor(private http:HttpClient) {

  }


  getPaises=()=>{ 

   return this.http.get(this.url); //retorna promesa
  }


}
