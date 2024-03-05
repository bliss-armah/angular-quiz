import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MininavoptionsComponent } from './mininavoptions.component';

describe('MininavoptionsComponent', () => {
  let component: MininavoptionsComponent;
  let fixture: ComponentFixture<MininavoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MininavoptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MininavoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
