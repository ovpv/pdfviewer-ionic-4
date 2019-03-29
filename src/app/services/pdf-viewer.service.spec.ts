import { TestBed } from '@angular/core/testing';

import { PdfViewerService } from './pdf-viewer.service';

describe('PdfViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfViewerService = TestBed.get(PdfViewerService);
    expect(service).toBeTruthy();
  });
});
