import { TestBed } from '@angular/core/testing';

import { MojLanguageService } from './moj-language.service';

describe('MojLanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MojLanguageService = TestBed.get(MojLanguageService);
    expect(service).toBeTruthy();
  });
});
