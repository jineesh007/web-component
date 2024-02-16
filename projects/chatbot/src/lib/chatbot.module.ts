import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { ChatbotComponent } from './chatbot.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ChatbotComponent
  ],
})
export class ChatbotModule implements DoBootstrap {
   constructor(private injector: Injector) {
    const customElement = createCustomElement(ChatbotComponent, { injector: this.injector });
    customElements.define('my-chatbox', customElement);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    // bootstrapApplication(ChatbotComponent);
  }
}
