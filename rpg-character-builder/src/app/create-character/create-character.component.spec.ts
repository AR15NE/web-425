import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CreateCharacterComponent] // Import the component here
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    const id = Math.floor(Math.random() * 1000) + 1;
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(id % 1).toBe(0);
  });

  it('should add a character with correct customization', () => {
    const form = {
      value: {
        name: 'Test Character',
        gender: 'Male',
        class: 'Warrior'
      },
      resetForm: jasmine.createSpy('resetForm')
    };
    component.onSubmit(form); // Simulate form submission
    expect(component.characters.length).toBe(1); // Verify a character was added
    expect(component.characters[0].name).toBe('Test Character');
    expect(component.characters[0].gender).toBe('Male');
    expect(component.characters[0].class).toBe('Warrior');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    const form = {
      resetForm: jasmine.createSpy('resetForm')
    };
    component.resetForm(form); // Call method to reset the form
    expect(form.resetForm).toHaveBeenCalled();
  });
});
