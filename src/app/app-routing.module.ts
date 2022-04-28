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


const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  /*
 {path:'juegos',component:JuegosComponent},
 {path:'juegos/tateti',component:TatetiComponent},
 {path:'juegos/memotest',component:MemotestComponent},*/

 {path:'home',component:JuegosComponent,
 
 children:[

  
 {path:'preguntados',component:PreguntadosComponent},
 {path:'ahorcado',component:AhorcadoComponent},
 {path:'mayor-menor',component:MayormenorComponent}
  

 ]},
 
 
 
  {path:"**",component: ErrorComponent},
  
  //{path: '/', component: HomeComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
