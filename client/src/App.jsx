import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import OtpVerification from "./pages/OtpVerification"
import Navbar from "./components/Navbar";

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage ? "" : "min-h-screen bg-gradient-to-b from-red-50 to-orange-100"}>
      {/* Show Navbar only if not on Home */}
      {!isHomePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
