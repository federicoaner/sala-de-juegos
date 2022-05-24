import { Component, OnInit } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { json } from 'express';
import { EncuestaService } from 'src/app/sericios/encuesta.service';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

  public forma : FormGroup;

  constructor(private fb: FormBuilder, private firestore:EncuestaService,private usuario:LoginUserService,private router:Router) {

     let mail=this.usuario.logged.email;
     console.log(mail);

    this.forma = this.fb.group({
      // 'nombre' : ['',[Validators.required, this.spacesValidator]],


       'nombre' : ['',Validators.required],
       'apellido' : ['',Validators.required],    
      'edad':['', [Validators.required, Validators.min(21), Validators.max(99)]],
       'telefono':['', [Validators.required,  Validators.maxLength(10)]],
       'comentario' : ['',Validators.required],
       'favorito' : ['',Validators.required],
        
       'calificacion' : ['',Validators.required],
      
       
       
     });

   }

   enviarEncuesta(){

   // let email=this.usuario.logged.email;
   // console.log(email);
    //let hola=this.forma.value;
    //let texto=JSON.stringify(hola);

   // console.log(this.forma.value);
   // alert(texto);
   
   
    this.firestore.agregarEncuesta(this.forma.value);
    this.forma.reset();
    this.router.navigateByUrl('home');


   }

  ngOnInit(): void {
  }

}
