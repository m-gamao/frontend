import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, MessageService } from 'app/services/message.service.js';

@Component({
  selector: 'app-message-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css'],
})
export class MessageHistoryComponent implements OnInit, OnChanges {
  @Input() refresh: any;
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      this.loadMessages(); // ✅ Call actual reload
    }
  }

  loadMessages(): void {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        console.log('✅ Messages loaded:', data);
        this.messages = data;
      },
      error: (err) => {
        console.error('❌ Failed to load messages:', err);
      },
    });
  }
}
