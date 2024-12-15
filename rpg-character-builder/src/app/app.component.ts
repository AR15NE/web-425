import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-character-builder';
  email: string | null = null; // Define the email property

  constructor() {}

  // Define the onPlayerTabClick method
  onPlayerTabClick(): void {
    console.log('Player tab clicked');
    // Add any additional logic here
  }

  // Define the signout method
  signout(): void {
    this.email = null;
    console.log('Signed out');
    // Add any additional sign-out logic here
  }
}
