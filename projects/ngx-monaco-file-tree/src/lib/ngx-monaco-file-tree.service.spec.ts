import { TestBed } from '@angular/core/testing';

import { NgxMonacoFileTreeService } from './ngx-monaco-file-tree.service';

describe('NgxMonacoFileTreeService', () => {
  let service: NgxMonacoFileTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMonacoFileTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
