/**
 *
 * @export
 * @param {HTMLElement} target
 */
export function Smoothscroll(target: HTMLElement) {
	if (target) {
		window.scroll({
			top: target.getBoundingClientRect().top,
			behavior: 'smooth',
		});
	}
}
