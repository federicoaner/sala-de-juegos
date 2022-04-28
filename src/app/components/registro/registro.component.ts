import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/sericios/login-user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;
  alertError : string = "";

  constructor(private router:Router, private auth:AngularFireAuth, private user:LoginUserService){
    this.email="";
    this.password="";
  };

  

  async RegistrarUsuario(){
    
    let nuevoUsuario={
      email: this.email,
      password: this.password,
  
    }

    try {
      return await this.auth.createUserWithEmailAndPassword(this.email,this.password);
      console.log("usuario enviado a firebase");
      this.router.navigateByUrl('/home');
      
    } catch (error) {
      console.log("error login"),error
      return null;
      
    }
   
  }

  Registrarse(){

    let user = {
      email: this.email,
      password: this.password
    }

    this.user.Register(user)
    .then((response)=>{
      
      this.router.navigateByUrl('/home');

    }).catch((error : any) =>{

      if(error.code == "auth/email-already-in-use"){
        this.alertError = "Ya existe un Usuario con esa cuenta.";
      
      }
    });

  }

  Redirigir(){
    
    this.router.navigate(['/home']);
 
   }



  ngOnInit(): void {
    
    }
  

}
