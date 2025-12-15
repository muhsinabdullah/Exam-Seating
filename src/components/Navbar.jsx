import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold text-primary">
          ExamSeat
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/seating">Seating Plan</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary btn-sm">Admin</button>
      </div>
    </div>
  );
};

export default Navbar;
