import { Directive, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Directive({
	selector: '[kuiDndDroppable]'
})
export class MakeDroppable implements OnInit {
	@Output() dropped: EventEmitter<any> = new EventEmitter();
	@Input() elementID: string;
	constructor(private _elementRef: ElementRef) { }

	ngOnInit(): void {
		const el = this._elementRef.nativeElement;
		const el2 = document.getElementById('dropZ');
		// Add a style to indicate that this element is a drop target
		el.addEventListener('dragenter', (e) => {
			el.classList.add('over');
		});

		// Remove the style
		el.addEventListener('dragleave', (e) => {
			el.classList.remove('over');
		});

		el.addEventListener('dragover', (e) => {
			if (e.preventDefault) {
				e.preventDefault();
			}

			e.dataTransfer.dropEffect = 'move';
			return false;
		});

		// On drop, get the data and convert it back to a JSON object
		// and fire off an event passing the data
		el.addEventListener('drop', (e) => {
			if (e.stopPropagation) {
				e.stopPropagation(); // Stops some browsers from redirecting.
			}

			el.classList.remove('over');
			const data = JSON.parse(e.dataTransfer.getData('text'));
			this.dropped.emit(data);
			return false;
		});
	}
}
