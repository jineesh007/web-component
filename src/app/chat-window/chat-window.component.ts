import { ApplicationRef, Component, DoBootstrap, Injector, OnDestroy, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy , DoBootstrap {
   // constructor(private injector: Injector) {
  //   const customElement = createCustomElement(ChatWindowComponent, { injector: this.injector });
  //   customElements.define('my-chatbox', customElement);
  // }
  constructor(public service:ChatbotService,private injector: Injector){
    // const customElement = createCustomElement(ChatWindowComponent, { injector: this.injector });
    // customElements.define('my-chatbox', customElement);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    // throw new Error('Method not implemented.');
  }
  connectedCallback() {
    console.log('Custom element connected to the DOM');
  }

  disconnectedCallback() {
    console.log('Custom element disconnected from the DOM');
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // const customElement = createCustomElement(ChatWindowComponent, { injector: this.injector });
    // customElements.define('my-chatbox', customElement);
    // throw new Error('Method not implemented.');
  }
  isWindowOpen = false;

  toggleWindow(){
    console.log("Toggled")
    this.isWindowOpen = !this.isWindowOpen
  }

  messages:Array<any> = [];
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim() === '') return;
    // this.messages.push(this.userInput);
    // this.userInput = '';
  }

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
