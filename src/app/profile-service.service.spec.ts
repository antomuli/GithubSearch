import { TestBed } from '@angular/core/testing';

import { ProfileServiceService } from './profile-service.service';

describe('ProfileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileServiceService = TestBed.get(ProfileServiceService);
    expect(service).toBeTruthy();
  });
});
