import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "text-blue-600 hover:text-blue-400 transition-colors";
    const activeClass = "font-bold text-blue-800 border-b-2 border-blue-600";

    return isActive(path) ? `${baseClass} ${activeClass}` : baseClass;
  };

  return (
    <div className="flex justify-between px-10 py-4 items-center">
      <div>
        <Link
          to="/"
          className={`text-blue-600 hover:text-blue-400 font-bold text-lg ${
            isActive("/") ? "text-blue-800" : ""
          }`}
        >
          Indi.ca
        </Link>
      </div>
      <div className="flex space-x-6 text-sm">
        <Link to="/all-urls" className={getLinkClass("/all-urls")}>
          All URLs
        </Link>

        <Link to="/statistics" className={getLinkClass("/statistics")}>
          Statistics
        </Link>

        <Link to="/documentation" className={getLinkClass("/documentation")}>
          Documentation
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
