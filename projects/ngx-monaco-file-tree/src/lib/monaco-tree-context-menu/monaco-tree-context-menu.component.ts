import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ContextMenuElementSeparator, ContextMenuElementText} from "./monaco-tree-context-menu.type";


@Component({
  selector: 'lib-monaco-tree-context-menu',
  templateUrl: './monaco-tree-context-menu.component.html',
  styleUrl: './monaco-tree-context-menu.component.css'
})
export class MonacoTreeContextMenuComponent {

  @Input() top: number | undefined;
	@Input() left: number | undefined

	@Input() theme: 'vs-dark' | 'vs-light' = 'vs-dark';

	@Input() elements: Array<ContextMenuElementSeparator|ContextMenuElementText> = []

	constructor(private eRef: ElementRef) {}

	@HostListener('document:click', ['$event'])
	clickout(event: MouseEvent) {
		if(!this.eRef.nativeElement.contains(event.target)) {
			this.top = -1000;
			this.left = -1000;
		}
	}

}
