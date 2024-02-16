import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit{
  constructor(public injector:Injector){}
  ngOnInit(): void {
    const customElement = createCustomElement(ChatWindowComponent, { injector: this.injector });
    customElements.define('my-chatbox', customElement);
  }
  

}
