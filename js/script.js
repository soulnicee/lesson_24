

const menuBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu-header');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}

	});
}
