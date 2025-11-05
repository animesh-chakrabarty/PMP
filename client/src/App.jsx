import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerification";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage = ["/login", "/signup", "/otp-verification"].includes(
    location.pathname
  );

  return (
    <div
      className={
        isHomePage
          ? ""
          : "min-h-screen bg-gradient-to-b from-red-50 to-orange-100"
      }
    >
      {/* Show Navbar only if not on Home or Auth pages */}
      {!isHomePage && !isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
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
