import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CreateGuildComponent] // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test 1: Ensure form controls are created
  it('should create the form with 5 controls', () => {
    expect(component.guildForm.contains('guildName')).toBeTruthy();
    expect(component.guildForm.contains('description')).toBeTruthy();
    expect(component.guildForm.contains('type')).toBeTruthy();
    expect(component.guildForm.contains('acceptTerms')).toBeTruthy();
    expect(component.guildForm.contains('notificationPreference')).toBeTruthy();
  });

  // Test 2: Ensure form is invalid when empty
  it('form should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  // Test 3: Ensure form is valid when filled correctly
  it('form should be valid when filled correctly', () => {
    component.guildForm.controls['guildName'].setValue('Guild Name');
    component.guildForm.controls['description'].setValue('Description');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('Email');
    expect(component.guildForm.valid).toBeTruthy();
  });

  // Test 4: Ensure guildName control is required
  it('should make the guildName control required', () => {
    let control = component.guildForm.get('guildName');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    }
  });

  // Test 5: Ensure acceptTerms control is required to be true
  it('should make the acceptTerms control required to be true', () => {
    let control = component.guildForm.get('acceptTerms');
    if (control) {
      control.setValue(false);
      expect(control.valid).toBeFalsy();
    }
  });

  // Test 6: Ensure form is invalid if required fields are missing
  it('should invalidate the form if required fields are missing', () => {
    component.guildForm.setValue({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: ''
    });
    expect(component.guildForm.valid).toBeFalsy();
  });

  // Test 7: Ensure onSubmit is called on form submit with valid data
  it('should call onSubmit on form submit with valid data', () => {
    spyOn(component, 'onSubmit');
    component.guildForm.controls['guildName'].setValue('Guild Name');
    component.guildForm.controls['description'].setValue('Description');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('Email');
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});




