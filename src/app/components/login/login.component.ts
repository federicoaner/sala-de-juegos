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
  responseMessage : boolean | string =false;

  miusuario:Usuario;

  email: string;
  password: string;
  alertError : string = "";


  constructor (private router:Router,private firestore:AngularFirestore, public auth:LoginUserService ){
    this.miusuario=new Usuario;
    this.email="";
    this.password="";
  };
  /*
    Loguearse(){

      let user = {
        email: this.email,
        password: this.password
      }
  
      this.auth.Login(this.email,this.password).then((response)=>{
        this.router.navigateByUrl('/home');

      });
      
    } */

   


    Loguearse(){
      try{

        let user = {
          email: this.email,
          password: this.password
        }
    
        this.auth.Login(this.email,this.password).then((response)=>{
          this.router.navigateByUrl('/home');
  
        })
      


        .catch(err =>{
          //this.responseMessage = err.message;
          switch(err.code)
          {
            case 'auth/invalid-email':
             this.responseMessage= 'Email invalido.';
              break;     
            case 'auth/user-disabled':
              this.responseMessage= 'Usuario deshabilitado.';
              break;
            case 'auth/user-not-found':
              this.responseMessage= 'Usuario no encontrado.';
              break;       
            case 'auth/wrong-password':
              this.responseMessage= 'Contrasenia incorrecta.';
              break;  
            case 'auth/user-not-found':
              this.responseMessage='Usuario no encontrado.';
              break;
            default:
              this.responseMessage = 'Error';
          }
          console.log('Error en login.ts: ',err);
        }); 
  
      }catch(err){
        console.log("Error ingresar",err);
      }
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
