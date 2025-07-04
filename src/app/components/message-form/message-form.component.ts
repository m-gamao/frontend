import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'app/services/message.service.js';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  phoneNumber: string = '';
  newMessageBody: string = '';
  loading: boolean = false;

  @Output() messageSent = new EventEmitter<void>();

  constructor(private messageService: MessageService) {}

  async sendMessage() {
    if (!this.phoneNumber.trim() || !this.newMessageBody.trim()) return;
    this.loading = true;

    try {
      await this.messageService.sendMessage(this.phoneNumber, this.newMessageBody);
      this.messageSent.emit();
      this.clearForm();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      this.loading = false;
    }
  }

  clearForm() {
    this.phoneNumber = '';
    this.newMessageBody = '';
  }
}
