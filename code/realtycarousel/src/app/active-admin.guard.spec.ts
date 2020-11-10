import { TestBed } from '@angular/core/testing';

import { ActiveAdminGuard } from './active-admin.guard';

describe('ActiveAdminGuard', () => {
  let guard: ActiveAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
