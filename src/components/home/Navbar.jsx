import { Link as ScrollLink } from 'react-scroll';

import Logo from '@/components/Logo';

import downloadResume from '@/helpers/downloadResume';

export default function Navbar ({
  loadingNavBar,
  loadedNavBar,
  loadPage,
}) {
  return (
    <nav id="desktop-nav" className={`Navbar ${loadingNavBar ? 'Navbar--loading' : ''} ${loadedNavBar ? 'Navbar--loaded' : ''}`}>
      <div role="button" onClick={loadPage} className="Navbar__logo" style={{animationDelay: '0ms'}}>
        <Logo />
      </div>

      <div className="Navbar__links">
        <ScrollLink
          className="Navbar__link"
          to="about"
          style={{ animationDelay: '200ms' }}
          smooth={true}
          duration={500}
        >
          About me
        </ScrollLink>

        <ScrollLink
          className="Navbar__link"
          to="experience"
          style={{ animationDelay: '400ms' }}
          smooth={true}
          duration={500}
        >
          Experience
        </ScrollLink>

        <ScrollLink
          className="Navbar__link"
          to="skills"
          style={{ animationDelay: '600ms' }}
          smooth={true}
          duration={500}
        >
          Skills
        </ScrollLink>

        {/* <ScrollLink
          className="Navbar__link"
          to="projects"
          style={{ animationDelay: '800ms' }}
          smooth={true}
          duration={500}
        >
          Projects
        </ScrollLink> */}

        <ScrollLink
          className="Navbar__link"
          to="contact"
          style={{ animationDelay: '800ms' }}
          smooth={true}
          duration={500}
        >
          Contact
        </ScrollLink>

        <button className="Navbar__button Button Button--default" onClick={downloadResume} style={{animationDelay: '1200ms'}}>Resume</button>
      </div>
    </nav>
  );
}
