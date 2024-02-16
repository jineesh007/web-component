import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-component';
  isWindowOpen = false;

  toggleWindow(){
    console.log("Toggled")
    this.isWindowOpen = !this.isWindowOpen
  }

  messages: string[] = [];
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim() === '') return;
    this.messages.push(this.userInput);
    this.userInput = '';
  }

  
}
