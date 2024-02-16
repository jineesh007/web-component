import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ChatWindowComponent, { injector: this.injector });
    customElements.define('my-chatbox', customElement);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
