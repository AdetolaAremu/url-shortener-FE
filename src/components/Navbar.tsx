import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  const getLinkClass = (path: string, isMobile = false) => {
    const baseClass = isMobile
      ? "block w-full py-2 px-4 text-left hover:bg-blue-50 transition-colors"
      : "text-blue-600 hover:text-blue-400 transition-colors";

    const activeClass = isMobile
      ? "font-bold text-blue-800 bg-blue-50"
      : "font-bold text-blue-800 border-b-2 border-blue-600";

    return isActive(path) ? `${baseClass} ${activeClass}` : baseClass;
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-10 relative ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link
              to="/"
              className={`text-blue-600 hover:text-blue-400 font-bold text-lg ${
                isActive("/") ? "text-blue-800" : ""
              }`}
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              Indi.ca
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/all-urls" className={getLinkClass("/all-urls")}>
              All URLs
            </Link>
            <Link to="/statistics" className={getLinkClass("/statistics")}>
              Statistics
            </Link>
            <Link
              to="/documentation"
              className={getLinkClass("/documentation")}
            >
              Documentation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute left-0 w-full bg-white overflow-hidden transition-all duration-300 ease-in-out shadow-md z-20 ${
            menuOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"
          }`}
        >
          <Link
            to="/all-urls"
            className={getLinkClass("/all-urls", true)}
            onClick={() => setMenuOpen(false)}
          >
            All URLs
          </Link>
          <Link
            to="/statistics"
            className={getLinkClass("/statistics", true)}
            onClick={() => setMenuOpen(false)}
          >
            Statistics
          </Link>
          <Link
            to="/documentation"
            className={getLinkClass("/documentation", true)}
            onClick={() => setMenuOpen(false)}
          >
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
