import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { ChatbotService } from './chatbot.service';
import { createCustomElement } from '@angular/elements';
// import { ChatWindowComponent } from 'src/app/chat-window/chat-window.component';

@Injectable({providedIn:'root'})
@Component({
  selector: 'lib-chatbot',
  templateUrl:'./chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatbotComponent  implements OnInit {
  constructor(public service:ChatbotService){}
  ngOnInit(): void {
    //  const customElement = createCustomElement(ChatbotComponent, { injector: this.injector });
    // customElements.define('my-chatbox', customElement);
  }
  isWindowOpen = false;
  toggleWindow(){
    console.log("Toggled")
    this.isWindowOpen = !this.isWindowOpen
  }

  messages:Array<any> = [];
  userInput: string = '';

  sendQuery(msg:string){
    console.log("Message", msg)
    let newUserMsg = {"message":msg, "messageOwner":"user"};
    this.messages.push(newUserMsg);
    this.service.sendQueryDDG(msg).subscribe((resp:any) => {
      console.log("resp", resp);
      let newBotMsg = {"message":resp.AbstractText, "messageOwner":"bot"};
      this.messages.push(newBotMsg);
    })
  }

}
