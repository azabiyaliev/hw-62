import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav bg-secondary">
      <div className="container">
        <div className="w-100 row row-cols-2 justify-content-between align-items-center">
          <div><span className="navbar-brand mb-0 text-white fs-1">B r a i n S t o r m </span></div>
        </div>
        <div className="ms-auto">
          <nav className="navbar navbar-nav row row-cols-1">
            <li>
              <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="text-white text-decoration-none" to="/AboutUs">About us</NavLink>
            </li>
            <li>
              <NavLink className="text-white text-decoration-none" to="/Contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink className="text-white text-decoration-none" to="/Works">Works</NavLink>
            </li>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;