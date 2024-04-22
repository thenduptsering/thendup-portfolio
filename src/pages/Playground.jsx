import { Link, Outlet } from 'react-router-dom';

export default function Playground () {
  return (
    <>
      <div className="Search__navbar">
        <nav className="Navbar">
          <Link className="Navbar__link" to="tiles">Tiles</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}