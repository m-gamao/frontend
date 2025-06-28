import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent],
  template: `<app-messages></app-messages>`,
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'frontend';
}
