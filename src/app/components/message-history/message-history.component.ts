import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from 'app/services/message.service.js';

@Component({
  selector: 'app-message-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css']
})
export class MessageHistoryComponent implements OnInit, OnChanges {
  @Input() messages: Message[] = [];

  @Input() refresh: any; 

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      // can call reload logic here
      console.log('Refresh triggered!');
      // e.g. this.loadMessages();
    }
  }
}
