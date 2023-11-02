import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsettingsComponent } from './quizsettings.component';

describe('QuizsettingsComponent', () => {
  let component: QuizsettingsComponent;
  let fixture: ComponentFixture<QuizsettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizsettingsComponent]
    });
    fixture = TestBed.createComponent(QuizsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
