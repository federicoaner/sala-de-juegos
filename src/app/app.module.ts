import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MayormenorComponent } from './components/mayormenor/mayormenor.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ChatComponent } from './components/chat/chat.component'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JuegoAudioperceptivaComponent } from './components/juego-audioperceptiva/juego-audioperceptiva.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ListadoEncuestasComponent } from './components/listado-encuestas/listado-encuestas.component';
import { RuedaFortunaComponent } from './components/rueda-fortuna/rueda-fortuna.component';
import { NgxWheelModule } from 'ngx-wheel';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuiensoyComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    JuegosComponent,
    PreguntadosComponent,
    AhorcadoComponent,
    MayormenorComponent,
    ChatComponent,
    JuegoAudioperceptivaComponent,
    PuntajesComponent,
    EncuestaComponent,
    ListadoEncuestasComponent,
    RuedaFortunaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWheelModule,
    
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      

     
    }),
    BrowserAnimationsModule,
   // provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    //agregueyo
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireAuthModule,
   AngularFirestoreModule,
   provideFirebaseApp(() => initializeApp(environment.firebase)),
   provideFirestore(() => getFirestore()),
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
