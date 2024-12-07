import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent] // Importing the standalone GuildListComponent for testing
    });

    fixture = TestBed.createComponent(GuildListComponent); // Create an instance of the component fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display guilds correctly', () => {
    // Set the guilds input for the component with test data
    component.guilds = [{ guildName: 'Knights', description: 'Brave warriors', type: 'PvE', notificationPreference: 'Email' }, { guildName: 'Wizards', description: 'Masters of magic', type: 'RP', notificationPreference: 'SMS' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.guild-profile').length).toBe(2);
    expect(compiled.querySelectorAll('.guild-profile')[0].textContent).toContain('Knights');
    expect(compiled.querySelectorAll('.guild-profile')[1].textContent).toContain('Wizards');
  });

  it('should display a message for an empty guild list', () => {
    component.guilds = []; // Set the guilds input to an empty array
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No guilds created yet.');
  });
});


