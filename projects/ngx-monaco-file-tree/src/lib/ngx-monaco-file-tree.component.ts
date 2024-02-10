import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuAction } from './monaco-file-tree/monaco-tree-file.type';
import { MonacoTreeElement } from './ngx-monaco-tree.type';

@Component({
  selector: 'lib-ngx-monaco-file-tree',
  template: `
  <div [style]="'width:' + width + ';height:' + height" [class]="'monaco-tree ' + theme">
      <lib-monaco-file-tree (contextMenuClick)="handleClickContextMenu($event)" (clickFile)="handleClickFile($event)" [theme]="theme" *ngFor="let row of tree" [name]="row.name" [content]="row.content" [depth]="0" [hide]="false"></lib-monaco-file-tree>
  </div>
`,
  styles: `
    .monaco-tree {
    font-family: -apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,HelveticaNeue-dark,Ubuntu,Droid Sans,sans-serif;
    width: 300px;
}

.monaco-tree.vs-dark {
    background: #1d1d1d;
    color: white;
}

.monaco-tree.vs-light {
    background: rgb(243, 243, 243);
    color: rgb(97, 97, 97);
}
  `,
})
export class NgxMonacoFileTreeComponent {

  @Input() theme: 'vs-dark' | 'vs-light' = 'vs-dark';
	@Input() tree: MonacoTreeElement[] = []

	@Input() width = "300px"
	@Input() height = "500px"

	@Output() clickFile = new EventEmitter<string>();
	@Output() clickContextMenu = new EventEmitter<ContextMenuAction>();
	// @Output() contextMenuClick = new EventEmitter<ContextMenuAction>();

	// contextMenu: Array<ContextMenuElementSeparator|ContextMenuElementText> = [
	// 	{type: "element", name: 'New File', action: () => {
	// 		this.contextMenuClick.emit(["new_file", this.curr ?? ''])
	// 	} },
	// 	{type: "element", name: 'New Directory', action: () => {
	// 			this.contextMenuClick.emit(["new_directory", this.curr ?? ''])
	// 		} },
	// 	{type: "separator" },
	// 	{type: "element", name: 'Delete', action: () => {
	// 			this.contextMenuClick.emit(["delete_file", this.curr ?? ''])
	// 	} }
	// ]

	handleClickFile(path: string) {
		this.clickFile.emit(path);
	}

	handleClickContextMenu(event: ContextMenuAction) {
		this.clickContextMenu.emit(event);
	}
}
