import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Home from './components/Home';

function App() {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="App">
      {isHome ? (
        <>
          <div className="App__navbar">
            <nav id="desktop-nav" className="Navbar">
              <div className="Navbar__logo">Thendup Tsering</div>

              <div className="Navbar__links">
                <Link className="Navbar__link">About me</Link>
                <Link className="Navbar__link">Experience</Link>
                <Link className="Navbar__link">Projects</Link>
                <Link className="Navbar__link">Contact</Link>
              </div>
            </nav>

            <nav id="hamburger-nav" className="Hamburger-Menu">
              <div className="Hamburger-Menu__logo">Thendup Tsering</div>

              <button className="Hamburger-Menu__button Button Button--icon" onClick={toggleMenu}>
                {showMenu ? (
                  <i className="fa-solid fa-x" />
                ) : (
                  <i className="fa-solid fa-bars" />
                )}
              </button>

              {showMenu && (
                <div className="Hamburger-Menu__links">
                  <Link className="Hamburger-Menu__link">About me</Link>
                  <Link className="Hamburger-Menu__link">Experience</Link>
                  <Link className="Hamburger-Menu__link">Projects</Link>
                  <Link className="Hamburger-Menu__link">Contact</Link>
                </div>
              )}
            </nav>
          </div>

          <div className="App__body">
            <Home />
          </div>
        </>
      ) : (
        <div className="App__body">
          <Outlet />
        </div>
      )}
    </div>
  )
}

export default App
