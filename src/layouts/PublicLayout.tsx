import { Link, Route, Routes } from "react-router-dom";
import Home from "../views/Home";

const PublicLayout = () => {
  return (
    <div className="bg-blue-50 h-screen p-4">
      <div className="flex justify-between px-10">
        <div className="pt-4">
          <Link to="/" className="text-blue-600 hover:text-blue-400 font-bold">
            Indi.ca
          </Link>
        </div>
        <div className="pt-5 text-sm flex">
          <Link to="/auth/login" className="text-blue-600 hover:text-blue-400">
            Statistics
          </Link>

          <Link
            to="/auth/login"
            className="text-blue-600 hover:text-blue-400 ml-2"
          >
            Documentation
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
