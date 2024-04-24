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
              <Link className="Navbar__link" to="/quote-tiles">Quotes & Tiles</Link>
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
