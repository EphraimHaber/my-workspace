import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoTreeContextMenuComponent } from './monaco-tree-context-menu.component';

describe('MonacoTreeContextMenuComponent', () => {
  let component: MonacoTreeContextMenuComponent;
  let fixture: ComponentFixture<MonacoTreeContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonacoTreeContextMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonacoTreeContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
