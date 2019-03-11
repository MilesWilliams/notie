/**
 *
 * @export
 * @param {*} key
 * @param {*} value
 * @returns {*}
 */
export function FunctionSerializer(key: any, value: any): any {
	// if we get a function, give us the code for that function
	if (typeof value === 'function') {
		return value.toString();
	}
	return value;
}

/**
 *
 *
 * @export
 * @param {*} key
 * @param {*} value
 * @returns {*}
 */
export function FunctionDeSerialize(key: any, value: any): any {
	if (typeof key === 'string' && key.indexOf('function ') === 0) {
		const functionTemplate = `(${value})`;
		// tslint:disable-next-line:no-eval
		return eval(functionTemplate);
	}
	return value;
}
