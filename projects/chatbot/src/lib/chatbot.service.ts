import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ChatbotComponent } from './chatbot.component';
import { createCustomElement } from '@angular/elements';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(public http: HttpClient, public injector:Injector) { }
  sendQueryDDGUrl:string = "https://api.duckduckgo.com/?format=json&pretty=1&q="
  sendQueryDDG(query:string){
    return this.http.get(this.sendQueryDDGUrl+encodeURIComponent(query));
  }

  checkService(){
    alert("Service working");
  }

  initChatWindow(){
    const customElement = createCustomElement(ChatbotComponent, { injector: this.injector });
    customElements.define('my-chatbox', customElement);
  }
}
