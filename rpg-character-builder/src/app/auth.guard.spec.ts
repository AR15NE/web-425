import { AuthGuard } from './auth.guard'; // Correct import
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let cookieService: CookieService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService, CookieService]
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(authGuard).toBeTruthy();
  });

  // Add more tests here as needed
});

