
const navigation = () => {
	
	// Navbar Slide for Mobile
	const navMobile = () => {
		const navToggle = document.querySelector('.navbar-toggle');
		const navBar = document.querySelector('.navbar-custom');
		const navLink = document.querySelectorAll('.navbar-custom .navitem-custom');
		const navDimmer = document.querySelector('.dimmer');
		const navLogo = document.querySelector('.logo');

		// Toggle Click Event
		navToggle.addEventListener('click', () => {

			// Toggle Navbar
			navBar.classList.toggle('active');
			
			//Dim the background on navigation open
			navDimmer.classList.toggle('active');

			navLogo.classList.toggle('dim-logo');

			// Humberger Menu Transform
			navToggle.classList.toggle('active');


			// Navbar Links Animation
			navLink.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = ``;
				} 
				else 
				{
					link.style.animation = `navLinkSlideOut 0.5s ease forwards ${index / 10 + 0.1 }s`;
				}
			});
		});

		// Click dimmer to exit from navigation
		navDimmer.addEventListener('click', () => {

			navBar.classList.remove('active');

			navDimmer.classList.remove('active');

			navLogo.classList.remove('dim-logo');

			navToggle.classList.remove('active');

			navLink.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = ``;
				} 
				else 
				{
					link.style.animation = `navLinkSlideOut 0.5s ease forwards ${index / 10 + 0.1 }s`;
				}
			});
		});
	}
	navMobile();
}
navigation();
