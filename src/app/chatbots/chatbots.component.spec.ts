import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotsComponent } from './chatbots.component';

describe('ChatbotsComponent', () => {
  let component: ChatbotsComponent;
  let fixture: ComponentFixture<ChatbotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
