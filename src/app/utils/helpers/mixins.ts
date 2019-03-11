/**
 *
 *
 * @export
 * @param {*} derivedCtor
 * @param {any[]} baseCtors
 * @description ApplyMixins helper function combines multiple classes "mixins" into a single class. This is a workaround as a class can only extend a single class.
 */
export function ApplyMixins(derivedCtor: any, baseCtors: any[]) {
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			derivedCtor.prototype[name] = baseCtor.prototype[name];
		});
	});
}
