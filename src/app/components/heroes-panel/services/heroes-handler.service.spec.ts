import { TestBed } from '@angular/core/testing';

import { HeroesHandlerService } from './heroes-handler.service';

describe('HeroesHandlerService', () => {
  let service: HeroesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
