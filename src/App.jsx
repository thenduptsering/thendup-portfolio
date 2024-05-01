import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Logo from './components/Logo';

function App() {
  const location = useLocation();

  const [showingAppLoader, setShowingAppLoader] = useState(true);
  const [loadingNavBar, setLoadingNavBar] = useState(false);
  const [loadingHero, setLoadingHero] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const initialLoad = () => {
    setShowingAppLoader(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setShowingAppLoader(false);
        resolve();
      }, 2400)
    })
  }

  const loadNavBar = () => {
    setLoadingNavBar(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoadingNavBar(false);
        resolve();
      }, 2000)
    })
  }

  const loadHero = () => {
    setLoadingHero(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoadingHero(false);
        resolve();
      }, 2000)
    })
  }

  const loadPage = () => {
    setAllLoaded(false);
    initialLoad()
      .then(() => {
        return loadNavBar();
      })
      .then(() => {
        return loadHero();
      })
      .then(() => {
        setAllLoaded(true);
      })
  }

  useEffect(() => {
    loadPage();
  }, [])

  return (
    <div className="App-Container">
      {isHome ? (
        <>
          <div className={`App-Loader ${showingAppLoader ? 'App-Loader--loading' : ''}`}>
            <Logo animationClassName="Logo--animate" />
          </div>

          <div className={`App ${showingAppLoader ? 'App--hide' : ''}`}>
            <div className="App__navbar">
              <nav id="desktop-nav" className={`Navbar ${loadingNavBar ? 'Navbar--loading' : ''}`}>
                <div role="button" onClick={loadPage} className="Navbar__logo" style={{animationDelay: '0ms'}}>
                  <Logo />
                </div>

                <div className="Navbar__links">
                  <Link className="Navbar__link" style={{animationDelay: '200ms'}}>About me</Link>
                  <Link className="Navbar__link" style={{animationDelay: '400ms'}}>Experience</Link>
                  <Link className="Navbar__link" style={{animationDelay: '600ms'}}>Skills</Link>
                  <Link className="Navbar__link" style={{animationDelay: '800ms'}}>Projects</Link>
                  <Link className="Navbar__link" style={{animationDelay: '1000ms'}}>Contact</Link>
                </div>
              </nav>

              <nav id="hamburger-nav" className="Hamburger-Menu">
                <div className="Hamburger-Menu__logo">
                  <Logo />
                </div>

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
                    <Link className="Hamburger-Menu__link">Skills</Link>
                    <Link className="Hamburger-Menu__link">Projects</Link>
                    <Link className="Hamburger-Menu__link">Contact</Link>
                  </div>
                )}
              </nav>
            </div>

            <div className="App__body">
              <Home allLoaded={allLoaded} loadingHero={loadingHero} />
            </div>

            <div className="App__footer">
              <p>Built by Thendup Tsering</p>
            </div>
          </div>
        </>
      ) : (
        <div className="App">
          <div className="App__body">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
