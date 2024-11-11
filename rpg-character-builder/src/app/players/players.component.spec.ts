import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    // Set up the testing module for the PlayersComponent
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, PlayersComponent] // Import PlayersComponent here
    }).compileComponents();

    // Create the component and test fixture
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const characterItems = compiled.querySelectorAll('.character-item');
    expect(characterItems.length).toBe(component.characters.length);
  });
});







