import { Link, Outlet } from 'react-router';

function Layout() {
  return (
    <div className="app">
      <nav className="header">
        <Link to="/" className="logo-link">
          <img className="logo" src="../images/mushroom.png" alt="Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">My Games</Link>
          <Link to="/add-game">Add Game</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
