import { Pipe, PipeTransform } from '@angular/core';
import { DataTypeChecker } from '../middleware/type-checker.middleware';

@Pipe({
	name: 'slugify',
})
export class SlugifyPipe implements PipeTransform {
	transform(str: string): string {
		return DataTypeChecker('string', str)
			.toLowerCase()
			.trim()
			.replace(/[^\w\-]+/g, ' ')
			.replace(/\s+/g, '-');
	}
}
