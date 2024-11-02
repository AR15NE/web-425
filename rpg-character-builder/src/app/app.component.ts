import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Defines the root component of the application
@Component({
  selector: 'app-root', // The selector for this component, used in index.html
  standalone: true, 
  imports: [RouterOutlet], // Imports RouterOutlet for navigation between routes
  templateUrl: './app.component.html', // Specifies the HTML template for this component
  styleUrls: ['./app.component.css'] // Specifies the CSS stylesheet for this component
})
export class AppComponent {
  title = 'rpg-character-builder'; // Sets the title property for the component
}
