import { TestBed } from '@angular/core/testing';

import { EmailSheduleService } from './email-shedule.service';

describe('EmailSheduleService', () => {
  let service: EmailSheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
