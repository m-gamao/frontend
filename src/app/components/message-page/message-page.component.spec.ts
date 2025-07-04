import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePage } from './message-page.component.js';

describe('MessagePage', () => {
  let component: MessagePage;
  let fixture: ComponentFixture<MessagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
