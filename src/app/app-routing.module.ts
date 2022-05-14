import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/juegos/juegos.component';


import { PreguntadosComponent } from './components/preguntados/preguntados.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MayormenorComponent } from './components/mayormenor/mayormenor.component';
import { HomeguardGuard } from './guards/homeguard.guard';
import { ChatComponent } from './components/chat/chat.component';
import { JuegoAudioperceptivaComponent } from './components/juego-audioperceptiva/juego-audioperceptiva.component';


const routes: Routes = [

  //{path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'quiensoy', component: QuiensoyComponent},
  //{path: 'home', component: HomeComponent, canActivate: [HomeguardGuard]  },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},

 
  {path:'home/mayor-menor',component:MayormenorComponent},
  {path:'home/ahorcado',component:AhorcadoComponent},
  {path:'home/preguntados',component:PreguntadosComponent},
  {path:'home/juego-audioperceptiva',component:JuegoAudioperceptivaComponent},
  {path:'chat',component:ChatComponent},

  /*
 {path:'juegos',component:JuegosComponent},
 {path:'juegos/tateti',component:TatetiComponent},
 {path:'juegos/memotest',component:MemotestComponent},*/

 /*
 {path:'home',component:HomeComponent, canActivate: [HomeguardGuard],
  
 children:[

  
 {path:'preguntados',component:PreguntadosComponent},
 {path:'ahorcado',component:AhorcadoComponent},
 {path:'mayor-menor',component:MayormenorComponent}
  

 ]},
 */
 
 
 
  {path:"**",component: ErrorComponent},
  
  //{path: '/', component: HomeComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
