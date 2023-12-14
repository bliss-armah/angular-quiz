import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizbarComponent } from './quizbar.component';

describe('QuizbarComponent', () => {
  let component: QuizbarComponent;
  let fixture: ComponentFixture<QuizbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizbarComponent]
    });
    fixture = TestBed.createComponent(QuizbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
