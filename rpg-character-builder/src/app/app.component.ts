import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule] // Add CommonModule here
})
export class AppComponent {
  title = 'RPG Character Builder';
  email?: string;

  constructor(private authService: AuthService, private cookieService: CookieService) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  signout() {
    this.authService.signout();
  }

  onPlayerTabClick() {
    console.log('Player tab clicked');
  }
}


