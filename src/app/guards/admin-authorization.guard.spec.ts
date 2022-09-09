import { TestBed } from '@angular/core/testing';

import { AdminAuthorizationGuard } from './admin-authorization.guard';

describe('AdminAuthorizationGuard', () => {
  let guard: AdminAuthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAuthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
