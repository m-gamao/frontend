import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
  id: string;
  phone: string;
  body: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/api/messages';  // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  sendMessage(phone: string, body: string): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, { phone, body });
  }
}
