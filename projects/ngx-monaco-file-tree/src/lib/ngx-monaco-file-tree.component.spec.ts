import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMonacoFileTreeComponent } from './ngx-monaco-file-tree.component';

describe('NgxMonacoFileTreeComponent', () => {
  let component: NgxMonacoFileTreeComponent;
  let fixture: ComponentFixture<NgxMonacoFileTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxMonacoFileTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxMonacoFileTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
