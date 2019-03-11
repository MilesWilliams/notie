/**
 *
 * @param data
 */
export function toBool(data: any): boolean {
	const bool = typeof data === 'string' ? Boolean(String(data)) : Boolean(Number(data));
	return bool;
}
