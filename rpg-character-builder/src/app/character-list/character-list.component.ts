import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CharacterListComponent {
  @Input() characters: Character[] = []; // Ensure Input decorator
}

interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}
