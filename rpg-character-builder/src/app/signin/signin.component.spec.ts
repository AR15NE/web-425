import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { SigninComponent } from './signin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Mocking HTTP requests

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninComponent, ReactiveFormsModule, HttpClientTestingModule], // Use imports instead of declarations
      providers: [AuthService, CookieService, Router]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signin method on form submit', () => {
    const signinSpy = spyOn(component, 'signin').and.callThrough();
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(signinSpy).toHaveBeenCalled();
  });
});

