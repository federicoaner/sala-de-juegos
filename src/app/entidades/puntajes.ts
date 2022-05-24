export class Puntajes {

    public name: any;
    public score: number = 0;
    public fecha: string;
    public juego: string;



  constructor(
    name: any, 
    score: number , 
    fecha: string, 
    juego: string
) {
    this.name = name
    this.score = score
    this.fecha = fecha
    this.juego = juego
  }



}
