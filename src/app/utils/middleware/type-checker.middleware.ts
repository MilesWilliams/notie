import * as fromFormatting from '../formating';

/**
 * @description Checks to see if the value being assigned is of the correct data type.
 * @param field
 * @param value
 */
export function DataTypeChecker(type: any, value) {
	switch (typeof type) {
		case 'string':
			return typeof value === 'string' ? value : value.toString();

		case 'number':
			return typeof value === 'number'
				? value
				: fromFormatting.toInt(value);

		case 'boolean':
			return typeof value === 'boolean'
				? value
				: fromFormatting.toBool(value);

		case 'object':
			return typeof value === 'object' ? value : JSON.stringify(value);
	}
}
