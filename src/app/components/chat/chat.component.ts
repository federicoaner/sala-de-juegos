import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/sericios/chat-service.service';
import { LoginUserService } from 'src/app/sericios/login-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  items : Observable<any[]>;
  mensaje : string="";

  constructor(private chat: ChatServiceService, public user: LoginUserService) { 
    this.items=this.chat.items;
    
  }


  enviarMensaje(){
    this.chat.enviarMensaje(this.mensaje,this.user.logged.email);
    console.log(this.user.userInfo)
  }



  ngOnInit(): void {
  }

}
