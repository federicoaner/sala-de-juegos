import { Component } from '@angular/core';
import { Usuario } from './entidades/usuario';
import { LoginUserService } from './sericios/login-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sala-de-juegos';

  

  constructor (public usuario:LoginUserService,private auth:AngularFireAuth,private router:Router ){
    
  }

  Logout(){

    this.auth.signOut();
    this.router.navigateByUrl('login');

  }





}
