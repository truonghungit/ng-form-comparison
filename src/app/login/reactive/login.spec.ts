import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveForm } from './login';

describe('LoginReactiveForm', () => {
  let component: LoginReactiveForm;
  let fixture: ComponentFixture<LoginReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
