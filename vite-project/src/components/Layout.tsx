import { Link, Outlet } from 'react-router';

function Layout() {
  return (
    <div className="app">
      <nav className="header">
        <Link to="/">Questlog</Link>
        <Link to="/">My Games</Link>
        <Link to="/add-game">Add Game</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
