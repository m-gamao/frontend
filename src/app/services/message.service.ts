import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private apiUrl = 'http://localhost:3000/api/messages';  // your Rails backend URL

  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl, {
      withCredentials: true  // ✅ sends session cookie for tracking
    });
  }

  sendMessage(phone: string, body: string): Observable<Message> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<Message>(
      this.apiUrl,
      { phone, body },
      {
        headers,
        withCredentials: true  // ✅ must be inside this object
      }
    );
  }
}
