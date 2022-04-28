import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'sala-de-juegos';

  miusuario:Usuario;

  email: string;
  password: string;
  alertError : string = "";


  constructor (private router:Router,private firestore:AngularFirestore, public auth:LoginUserService ){
    this.miusuario=new Usuario;
    this.email="";
    this.password="";
  };
  
    Loguearse(){

      let user = {
        email: this.email,
        password: this.password
      }
  
      this.auth.Login(this.email,this.password).then((response)=>{
        this.router.navigateByUrl('/home');

      });
      
    }

    
   AccesoRapido(){
    this.email = 'invitado@invitado.com';
    this.password = 'invitado';
    //this.router.navigateByUrl('/home');

  }
    

  /*
  PruebaConexion Firebase(){

  
    this.firestore.collection("usuario").add({"nombre":"roberto","password":"231132"}).then(()=>{
      console.info("usuario logueado");


    }).catch(err=>{
      console.log(err)
    })

  
    };
*/



        
  



  mostrar():void{

    console.info(this.miusuario);
  }
  


  //constructor() { }

  ngOnInit(): void {
  }

  

}
