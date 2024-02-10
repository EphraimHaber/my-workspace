import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoFileTreeComponent } from './monaco-file-tree.component';

describe('MonacoFileTreeComponent', () => {
  let component: MonacoFileTreeComponent;
  let fixture: ComponentFixture<MonacoFileTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonacoFileTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonacoFileTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
