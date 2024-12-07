import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent] // Importing the standalone CharacterListComponent for testing }).compileComponents();
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent); // Create an instance of the component fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display characters correctly', () => {
    // Set the characters input for the component with test data
    component.characters = [{ name: 'Hero', id: 1, gender: 'Male', class: 'Warrior' }, { name: 'Villain', id: 2, gender: 'Female', class: 'Mage' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.character-profile').length).toBe(2);
    expect(compiled.querySelectorAll('.character-profile')[0].textContent).toContain('Hero');
    expect(compiled.querySelectorAll('.character-profile')[1].textContent).toContain('Villain');
  });

  it('should display a message for an empty character list', () => {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No characters created yet.');
  });
});
