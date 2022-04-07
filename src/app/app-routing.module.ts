import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:"**",component: ErrorComponent},
  
  //{path: '/', component: HomeComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
