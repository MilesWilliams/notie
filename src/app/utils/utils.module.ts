import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter-collection.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { Pipes } from './pipes';
import { ReversePipe } from './pipes/reverse.pipe';
import { BrowserDetect } from './browser/detect-browser';

@NgModule({
	imports: [CommonModule],
	declarations: [
		FilterPipe,
		TruncateTextPipe,
		SlugifyPipe,
		ReversePipe,
	],
	exports: [
		FilterPipe,
		TruncateTextPipe,
		SlugifyPipe,
		ReversePipe,
	],
	providers: [...Pipes],
})
export class UtilsModule {}
