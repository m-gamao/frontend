import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHistoryComponent } from '../message-history/message-history.component.js';
import { MessageFormComponent } from '../message-form/message-form.component.js';

@Component({
  selector: 'app-message-page',
  standalone: true,
  imports: [CommonModule, MessageFormComponent, MessageHistoryComponent],
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent {
  refreshTrigger = 0;

  onMessageSent() {
    this.refreshTrigger++;
  }
}

