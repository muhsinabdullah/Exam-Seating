import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-200 px-6">
            {/* Left */}
            <div className="flex-1">
                <Link to="/" className="text-xl font-bold">
                    Exam Seating
                </Link>
            </div>

            {/* Right */}
            <div className="flex gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `btn btn-ghost btn-sm ${isActive ? "btn-active" : ""}`
                    }
                >
                    Home
                </NavLink>

                {user && (
                    <NavLink
                        to="/seating"
                        className={({ isActive }) =>
                            `btn btn-ghost btn-sm ${isActive ? "btn-active" : ""}`
                        }
                    >
                        Seating
                    </NavLink>
                )}

                {user ? (
                    <button
                        onClick={logout}
                        className="btn btn-error btn-sm"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `btn btn-primary btn-sm ${isActive ? "btn-active" : ""}`
                        }
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
