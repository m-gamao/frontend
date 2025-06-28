import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Message {
  id: string;
  body: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];

  getMessages(): Observable<Message[]> {
    // Return all messages (simulate API call)
    return of(this.messages);
  }

  sendMessage(body: string): Observable<Message> {
    const newMessage: Message = {
      id: (this.messages.length + 1).toString(),
      body,
      timestamp: new Date().toISOString(),
    };
    this.messages.unshift(newMessage);
    return of(newMessage);
  }
}
