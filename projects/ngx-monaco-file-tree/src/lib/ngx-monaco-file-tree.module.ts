import { NgModule } from '@angular/core';
import { NgxMonacoFileTreeComponent } from './ngx-monaco-file-tree.component';
import { CommonModule } from '@angular/common';
import { MonacoFileTreeComponent } from './monaco-file-tree/monaco-file-tree.component';
import { MonacoTreeContextMenuComponent } from './monaco-tree-context-menu/monaco-tree-context-menu.component';



@NgModule({
  declarations: [
    NgxMonacoFileTreeComponent,
    MonacoFileTreeComponent,
    MonacoTreeContextMenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxMonacoFileTreeComponent,
    MonacoFileTreeComponent,
    MonacoTreeContextMenuComponent,
  ]
})
export class NgxMonacoFileTreeModule { }
