// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/icons/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Buy", href: "#" },
    { name: "Rent", href: "#" },
    { name: "House Prices", href: "#" },
    { name: "Find Agent", href: "#" },
    { name: "Commercial", href: "#" },
    { name: "Inspire", href: "#" },
    { name: "Overseas", href: "#" },
  ];

  return (
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                  src={logo}
                  alt="Logo"
                  className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                        to={link.href}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
              ))}
            </ul>

            {/* Auth Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                <User className="h-4 w-4" />
                Login
              </Link>

              <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
              ) : (
                  <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
              <div className="lg:hidden py-4 border-t border-gray-200">
                <ul className="space-y-1 mb-4">
                  {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                            to={link.href}
                            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <Link
                      to="/login"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Login
                  </Link>

                  <Link
                      to="/signup"
                      className="px-4 py-2 text-sm font-semibold text-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
}