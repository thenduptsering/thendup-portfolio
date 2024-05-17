import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '@/components/Logo';

import downloadResume from '@/helpers/downloadResume';

export default function HamburgerNav() {
	const [showHamburger, setShowHamburger] = useState(false);

	const closeHamburger = () => {
		setShowHamburger(false);
	};

	const openHamburger = () => {
		setShowHamburger(true);
	};

	return (
		<nav id="hamburger-nav" className="Hamburger-Menu">
			<div className="Hamburger-Menu__logo">
				<Logo />
			</div>

			<button
				className="Hamburger-Menu__button Button Button--icon"
				onClick={openHamburger}
			>
				<i className="fa-solid fa-bars" />
			</button>

			<div
				className={`Hamburger-Menu__slideover ${
					showHamburger ? 'Hamburger-Menu__slideover--open' : ''
				}`}
			>
				<div className="Hamburger-Menu__slideover-close">
					<button
						className="Hamburger-Menu__button Button Button--icon"
						onClick={closeHamburger}
					>
						<i className="fa-solid fa-x" />
					</button>
				</div>

				<div className="Hamburger-Menu__slideover-links">
					<ScrollLink
						className="Hamburger-Menu__slideover-link"
						to="about"
						smooth={true}
						duration={500}
						onClick={closeHamburger}
					>
						About me
					</ScrollLink>

					<ScrollLink
						className="Hamburger-Menu__slideover-link"
						to="experience"
						smooth={true}
						duration={500}
						onClick={closeHamburger}
					>
						Experience
					</ScrollLink>

					<ScrollLink
						className="Hamburger-Menu__slideover-link"
						to="skills"
						smooth={true}
						duration={500}
						onClick={closeHamburger}
					>
						Skills
					</ScrollLink>

					<ScrollLink
						className="Hamburger-Menu__slideover-link"
						to="projects"
						smooth={true}
						duration={500}
						onClick={closeHamburger}
					>
						Projects
					</ScrollLink>

					<ScrollLink
						className="Hamburger-Menu__slideover-link"
						to="contact"
						smooth={true}
						duration={500}
						onClick={closeHamburger}
					>
						Contact me
					</ScrollLink>

					<button
						className="Hamburger-Menu__slideover-button Button Button--default"
						onClick={downloadResume}
					>
						Download resume
					</button>
				</div>
			</div>
		</nav>
	);
}
