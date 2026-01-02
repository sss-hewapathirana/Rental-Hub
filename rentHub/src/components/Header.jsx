import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import login from "../assets/icons/login.svg";
export default function Navbar() {
  return (
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* LEFT SIDE: Logo + Auth Buttons */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>

            {/* RIGHT SIDE: Navigation Links */}
            <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
              <li>
                <Link to="#" className="hover:text-indigo-600">
                  Buy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-600">
                  Rent
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-600">
                  House Prices
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-600">
                  Find Agent
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-600">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-600">
                  Inspire
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-indigo-600">
                  Overseas
                </Link>
              </li>
            </ul>

            {/* Login & Sign Up */}
            <div className="flex items-center gap-3 text-sm">
              <Link
                  to="/login"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
              >
                <img src={login} alt="Login" className="h-4 w-4" />
                Login
              </Link>

              <Link
                  to="/signup"
                  className="flex items-center gap-1 px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}
