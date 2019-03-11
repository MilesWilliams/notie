import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';


@Directive({
	selector: '[kuiDnd]'
})
export class DndDirective {
	@Input() private allowed_extensions: Array<string> = [];
	@Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
	@Output() private filesInvalidEmiter: EventEmitter<File[]> = new EventEmitter();
	private dropZoneInner;
	private dropZone;
	private img;

	constructor() { }

	@HostListener('dragover', ['$event'])
	onDragOver(evt): void {
		this.dropZoneInner = document.getElementsByClassName('drop-zone-inner')[0];
		this.dropZone = document.getElementById('drop_zone');
		this.img = this.dropZoneInner ? this.dropZoneInner.nextElementSibling : this.dropZone.children[0] as HTMLImageElement;

		const svg = document.getElementById('arrow');

		evt.preventDefault();
		evt.stopPropagation();
		if (this.img) {
			this.img.style.opacity = '0.8';
		}
		if (svg) {
			svg.classList.add('hover');
		}
		const files = evt.dataTransfer.files;

		if (files.length > 0) {
			// do some stuff here
		}
	}
	@HostListener('dragleave', ['$event'])
	public onDragLeave(evt): void {
		const svg = document.getElementById('arrow');
		evt.preventDefault();
		evt.stopPropagation();
		this.dropZoneInner = document.getElementsByClassName('drop-zone-inner')[0];
		this.dropZone = document.getElementById('drop-zone');
		this.img = this.dropZoneInner ? this.dropZoneInner.nextElementSibling : this.dropZone.children[0] as HTMLImageElement;
		if (this.img) {
			this.img.style.opacity = '1';
		}
		if (svg) {
			svg.classList.remove('hover');
		}

	}

	@HostListener('drop', ['$event'])
	public onDrop(evt): void {
		const svg = document.getElementById('arrow');
		evt.preventDefault();
		evt.stopPropagation();
		this.dropZoneInner = document.getElementsByClassName('drop-zone-inner')[0];
		this.dropZone = document.getElementById('drop_zone');
		this.img = this.dropZoneInner ? this.dropZoneInner.nextElementSibling : this.dropZone.children[0] as HTMLImageElement;
		if (this.img) {
			this.img.style.opacity = '1';
		}
		if (svg) { svg.classList.remove('hover'); }
		const files = evt.dataTransfer.files;
		const valid_files: Array<File> = [];
		const invalid_files: Array<File> = [];
		if (files.length > 0) {
			for (const file of files) {
				const ext = file.name.split('.')[file.name.split('.').length - 1];
				this.allowed_extensions.lastIndexOf(ext) !== -1 ? valid_files.push(file) : invalid_files.push(file);
			}
			this.filesChangeEmiter.emit(valid_files);
			this.filesInvalidEmiter.emit(invalid_files);
		}
	}


}
