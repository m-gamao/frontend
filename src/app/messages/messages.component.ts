import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  newMessageBody = '';
  loading = false;
  error = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages(): void {
    this.loading = true;
    this.messageService.getMessages().subscribe({
      next: (msgs) => {
        this.messages = msgs;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load messages';
        this.loading = false;
      }
    });
  }

  sendMessage(): void {
    if (!this.newMessageBody.trim()) return;

    this.messageService.sendMessage(this.newMessageBody.trim()).subscribe({
      next: (msg) => {
        this.messages.unshift(msg);
        this.newMessageBody = '';
      },
      error: (err) => {
        this.error = 'Failed to send message';
      }
    });
  }
}
