import { TestBed } from '@angular/core/testing';

import { UserLoginService } from './userLogin.service';

describe('UserLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoginService = TestBed.get(UserLoginService);
    expect(service).toBeTruthy();
  });
});
