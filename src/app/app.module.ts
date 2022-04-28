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
    MayormenorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    //agregueyo
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireAuthModule,
   AngularFirestoreModule,
   provideFirebaseApp(() => initializeApp(environment.firebase)),
   provideFirestore(() => getFirestore())
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
