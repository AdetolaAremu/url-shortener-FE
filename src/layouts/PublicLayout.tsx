import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "../components/Navbar";
import AllUrl from "../views/AllUrl";
import Statistics from "../views/Statistics";
import Documentation from "../views/Documentation";
import Redirection from "../views/Redirection";

const PublicLayout = () => {
  const location = useLocation();
  const validRoutes = ["/", "/all-urls", "/statistics", "/documentation"];

  const isShortCodePage =
    !validRoutes.includes(location.pathname) && location.pathname.length === 7;

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {!isShortCodePage && <Navbar />}
      {/* <div> - {isShortCodePage}</div> */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-urls" element={<AllUrl />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/:shortCode" element={<Redirection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
