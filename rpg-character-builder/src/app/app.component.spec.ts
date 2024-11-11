import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { PlayersComponent } from './players/players.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const routes: Routes = [
      { path: 'players', component: PlayersComponent }
    ];
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), AppComponent, PlayersComponent] // Import standalone components
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'RPG Character Builder' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RPG Character Builder'); 
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('RPG Character Builder');
  });

  it('should have correct route for PlayersComponent', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(PlayersComponent);
    }
  });
});









