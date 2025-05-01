import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "../components/Navbar";
import AllUrl from "../views/AllUrl";
import Statistics from "../views/Statistics";
import Documentation from "../views/Documentation";

const PublicLayout = () => {
  return (
    <div className="bg-blue-50 h-screen p-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-urls" element={<AllUrl />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
