import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatbotComponent } from 'projects/chatbot/src/public-api';

const routes: Routes = [{ path: "test", component: TestCompComponent }, 
{ path: 'chat', component: ChatWindowComponent }, { path: 'chat-build', component: ChatbotComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
