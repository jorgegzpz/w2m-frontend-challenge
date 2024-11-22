import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HEROES_MOCK_LIST } from '../../model/heroes-mock-list';
import { HeroesHandlerService } from '../../services/heroes-handler.service';
import { HeroesListComponent } from './heroes-list.component';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  let service: HeroesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeroesListComponent,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
      ],
    });

    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;

    service = fixture.debugElement.injector.get(HeroesHandlerService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply filter correctly', () => {
    const event = new KeyboardEvent('keyup', { key: 'n', code: 'Keyn' });
    Object.defineProperty(event, 'target', { writable: false, value: { value: 'Batman' } });

    component.applyFilter(event);

    expect(component.dataSource.filter).toBe('Batman');
  });

  it('should highlight the selected row', () => {
    const heroRow = HEROES_MOCK_LIST[0];
    const spySelectedHero = spyOn(service, 'setSelectedHero').and.callFake(() => null);
    component.highlight(heroRow);

    expect(spySelectedHero).toHaveBeenCalledWith(heroRow);
  });
});
