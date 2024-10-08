import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesListHeaderComponent } from './components/heroes-list-header/heroes-list-header.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes.component';
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  const HeroesListComponentMock = {
  };
  const HeroesListHeaderComponentMock = {
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroesComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: HeroesListComponent,
          useValue: HeroesListComponentMock,
        },
        {
          provide: HeroesListHeaderComponent,
          useValue: HeroesListHeaderComponentMock,
        },
      ],
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
