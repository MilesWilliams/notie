/**
 *
 *
 * @export
 * @param {*} elem
 * @param {*} selector
 * @returns {HTMLElement}
 */
export function GetClosestElm(elem: any, selector: any): HTMLElement {
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				const matches = (
					this.document || this.ownerDocument
				).querySelectorAll(s);
				let i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Get closest match
	for (; elem && elem !== document; elem = elem.parentNode) {
		if (elem.matches(selector)) return elem;
	}

	return null;
}
