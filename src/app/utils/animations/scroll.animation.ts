export function Smoothscroll(target) {
	if (target) {
		window.scroll({
			top: target.getBoundingClientRect().top,
			behavior: 'smooth',
		});
	}
}
