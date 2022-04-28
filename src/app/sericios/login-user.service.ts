import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  logged : any = false;
  userInfo : any = "";


  constructor(private fireauth : AngularFireAuth, private firestore : AngularFirestore, private router : Router) {

    fireauth.authState.subscribe((user) => 
    (this.logged= user));
    
  }

  Login(email : string , password : string){
    
    this.userInfo = email;
    return this.fireauth.signInWithEmailAndPassword(email, password);

  }


  Register(user : any ){

   // this.firestore.collection("LogUsuarios").add(user);
    return this.fireauth.createUserWithEmailAndPassword(user.email , user.password);

  }



  
}
