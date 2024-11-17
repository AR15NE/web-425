import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CreateCharacterComponent {
  characters: Character[] = []; // Array to store created characters

  onSubmit(form: any) {
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID for the character
      name: form.value.name,
      gender: form.value.gender,
      class: form.value.class
    };
    this.characters.push(newCharacter); // Add new character to the array
    this.resetForm(form);
  }

  resetForm(form: any) {
    form.resetForm();
  }
}

// Interface defining the structure of a Character object
interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}
