import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { MessagePageComponent } from './components/message-page/message-page.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessagePageComponent],
  template: `
    <app-message-page></app-message-page>
  `,
  styleUrls: ['./app.css']
})
export class App {}
