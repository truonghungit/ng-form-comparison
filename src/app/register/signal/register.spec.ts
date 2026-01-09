import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSignalForm } from './register';

describe('RegisterSignalForm', () => {
  let component: RegisterSignalForm;
  let fixture: ComponentFixture<RegisterSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSignalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
