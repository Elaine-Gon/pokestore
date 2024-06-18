import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOrderingComponent } from './button-ordering.component';

describe('ButtonOrderingComponent', () => {
  let component: ButtonOrderingComponent;
  let fixture: ComponentFixture<ButtonOrderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonOrderingComponent]
    });
    fixture = TestBed.createComponent(ButtonOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
