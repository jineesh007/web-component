import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(public http: HttpClient) { }

  sendQueryDDGUrl:string = "https://api.duckduckgo.com/?format=json&pretty=1&q="
  sendQueryDDG(query:string){
    return this.http.get(this.sendQueryDDGUrl+encodeURIComponent(query));
  }
}
