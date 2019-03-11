/**
 *
 * @param text
 * @param join optional
 */
export function Lowercase(text: string, join: string = '_'): string {
	let str = text.toLowerCase();
	const formattedString = str.split(' ');
	if (formattedString.length >= 2) {
		for (let i = 0; i < formattedString.length; i++) {
			formattedString[i] =
				formattedString[i].charAt(0).toLowerCase() +
				formattedString[i].slice(1);
		}
		str = formattedString.join(join);
	}
	return str;
}

export function Uppercase(text: string): string {
	let str = text.toUpperCase();
	const formattedString = str.split(' ');
	if (formattedString.length >= 2) {
		for (let i = 0; i < formattedString.length; i++) {
			formattedString[i] =
				formattedString[i].charAt(0).toUpperCase() +
				formattedString[i].slice(1);
		}
		str = formattedString.join('_');
	} else {
		str = str.charAt(0).toUpperCase() + str.slice(1);
	}
	return str;
}

export function Capitalize(text: string): string {
	let str = text.toLowerCase();
	const formattedString = str.split(' ');
	if (formattedString.length >= 2) {
		for (let i = 0; i < formattedString.length; i++) {
			formattedString[i] =
				formattedString[i].charAt(0).toUpperCase() +
				formattedString[i].slice(1);
		}
		str = formattedString.join(' ');
	} else {
		str = str.charAt(0).toUpperCase() + str.slice(1);
	}
	return str;
}

/**
 *
 * @export
 * @param {string} name
 * @returns {string}
 */
export function Singularize(name: string): string {
	if (name.lastIndexOf('s') === name.length - 1) {
		return name.slice(0, name.length - 1);
	} else {
		return name;
	}
}

/**
 *
 *
 * @export
 * @param {*} number
 * @description returns the english word equivalent of the number
 * @returns {string}
 */
export function NumToWords(number) {
	const arr = x => Array.from(x);
	const num = x => Number(x) || 0;
	const str = x => String(x);
	const isEmpty = xs => xs.length === 0;
	const take = n => xs => xs.slice(0, n);
	const drop = n => xs => xs.slice(n);
	const reverse = xs => xs.slice(0).reverse();
	const comp = f => e => x => f(e(x));
	const not = x => !x;
	const chunk = n => xs =>
		isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
	const a = [
		'',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];
	const b = [
		'',
		'',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety',
	];
	const g = [
		'',
		'thousand',
		'million',
		'billion',
		'trillion',
		'quadrillion',
		'quintillion',
		'sextillion',
		'septillion',
		'octillion',
		'nonillion',
	];
	// this part is really nasty still
	// it might edit this again later to show how Monoids could fix this up
	const makeGroup = ([ones, tens, huns]) => {
		return [
			num(huns) === 0 ? '' : a[huns] + ' hundred ',
			num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + '-') || '',
			a[tens + ones] || a[ones],
		].join('');
	};
	// "thousands" constructor; no real good names for this, i guess
	const thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);
	// execute !
	if (typeof number === 'number') return NumToWords(String(number));
	if (number === '0') return 'zero';
	return comp(chunk(3))(reverse)(arr(number))
		.map(makeGroup)
		.map(thousand)
		.filter(comp(not)(isEmpty))
		.reverse();
}
