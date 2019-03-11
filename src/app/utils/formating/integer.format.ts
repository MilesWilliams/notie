export function toInt(value: any): number {
	const toParse = typeof value !== 'number' ? parseInt(value, 10) : value;
	return toParse;
}
