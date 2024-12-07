import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component'; // Ensure this import

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, CharacterListComponent] // Ensure CharacterListComponent here
})
export class CreateCharacterComponent {
  characters: Character[] = [];
  @Output() characterCreated = new EventEmitter<Character>();

  onSubmit(form: any) {
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: form.value.name,
      gender: form.value.gender,
      class: form.value.class
    };
    this.characters.push(newCharacter);
    this.characterCreated.emit(newCharacter);
    this.resetForm(form);
  }

  resetForm(form: any) {
    form.resetForm();
  }
}

interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}



