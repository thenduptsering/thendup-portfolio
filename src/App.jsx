import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className="App__navbar">
        <nav className="Navbar">
          <Link className="Navbar__link" to="/">Home</Link>

          <Link className="Navbar__link" to="/tiles">Tiles</Link>
        </nav>
      </div>

      <div className="App__body">
        <Outlet />
      </div>

    </div>
  )
}

export default App
