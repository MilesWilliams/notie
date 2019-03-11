import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
	name: 'reverse',
})
export class ReversePipe implements PipeTransform {
	transform(input: any): any {
		if (!isArray(input)) {
			return input;
		}

		return [...input].reverse();
	}
}