import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { TatetiComponent } from './components/tateti/tateti.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuiensoyComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    JuegosComponent,
    TatetiComponent,
    MemotestComponent,
    PreguntadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
