import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[makeDraggable]'
})
export class DndMakedraggableDirective implements OnInit {
	// tslint:disable-next-line:no-input-rename
	@Input('makeDraggable') data: any;

	constructor(private _elementRef: ElementRef) { }

	ngOnInit(): void {
		// Get the current element
		const el = this._elementRef.nativeElement.querySelector('li') as HTMLElement;
		const child = el.children[0] as HTMLElement;
		// Set the draggable attribute to the element
		el.draggable = true;

		// Set up the dragstart event and add the drag-src CSS class
		// to change the visual appearance. Set the current todo as the data
		// payload by stringifying the object first
		el.addEventListener('dragstart', (e) => {
			el.classList.add('drag-src');
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text', child.getAttribute('data'));
		});

		// Remove the drag-src class
		el.addEventListener('dragend', (e) => {
			e.preventDefault();
			el.classList.remove('drag-src');
		});
	}
}
