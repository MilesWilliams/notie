import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndDirective } from './dnd/directives/dnd.directive';
import { MakeDroppable } from './dnd/directives/dnd-droppable.directive';
import { DndMakedraggableDirective } from './dnd/directives/dnd-makedraggable.directive';
import { FilterPipe } from './pipes/filter-collection.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { Pipes } from './pipes';
import { ReversePipe } from './pipes/reverse.pipe';
import { BrowserDetect } from './browser/detect-browser';

@NgModule({
	imports: [CommonModule],
	declarations: [
		DndDirective,
		MakeDroppable,
		DndMakedraggableDirective,
		FilterPipe,
		TruncateTextPipe,
		SlugifyPipe,
		ReversePipe,
	],
	exports: [
		DndDirective,
		MakeDroppable,
		DndMakedraggableDirective,
		FilterPipe,
		TruncateTextPipe,
		SlugifyPipe,
		ReversePipe,
	],
	providers: [...Pipes],
})
export class UtilsModule {}
