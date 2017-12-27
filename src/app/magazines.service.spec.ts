import { TestBed, inject } from '@angular/core/testing';

import { MagazinesService } from './magazines.service';

describe('MagazinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagazinesService]
    });
  });

  it('should be created', inject([MagazinesService], (service: MagazinesService) => {
    expect(service).toBeTruthy();
  }));
});
