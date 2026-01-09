import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignalForm } from './login';

describe('LoginSignalForm', () => {
  let component: LoginSignalForm;
  let fixture: ComponentFixture<LoginSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
