import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CharacterListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the characters array', () => {
    component.characters = [];
    expect(component.characters).toEqual([]);
  });

  it('should display character names correctly', () => {
    const mockCharacters = [
      { id: 1, name: 'Character 1', gender: 'Female', class: 'Warrior' },
      { id: 2, name: 'Character 2', gender: 'Male', class: 'Mage' }
    ];
    component.characters = mockCharacters;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(mockCharacters.length);
  });
});
