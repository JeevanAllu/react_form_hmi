// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link className={location.pathname === '/' ? 'active' : ''} to="/">Login</Link>
      <Link className={location.pathname === '/register' ? 'active' : ''} to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
