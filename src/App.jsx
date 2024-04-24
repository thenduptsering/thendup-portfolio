import { Link, Outlet, useLocation } from 'react-router-dom';

import Home from './components/Home';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      {isHome ? (
        <>
          <div className="App__navbar">
            <nav className="Navbar">
              <div className="Navbar__left">Thendup Tsering</div>

              <div className="Navbar__right">
                <Link className="Navbar__link">About me</Link>
                <Link className="Navbar__link">Experience</Link>
                <Link className="Navbar__link">Projects</Link>
                <Link className="Navbar__link">Contact</Link>
              </div>
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
