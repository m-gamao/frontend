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

  formatPhoneNumber(rawPhone: string): string {
    // Remove non-digits
    const digits = rawPhone.replace(/\D/g, '');
  
    // Slice off country code (assumes US numbers with +1)
    const cleaned = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  
    if (cleaned.length !== 10) return rawPhone; // fallback
  
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      this.loadMessages(); // Call actual reload
    }
  }

  loadMessages(): void {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        console.log('Messages loaded:', data);
        this.messages = data;
      },
      error: (err) => {
        console.error('Failed to load messages:', err);
      },
    });
  }
}
