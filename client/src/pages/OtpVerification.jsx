import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../services/Auth.services";
import { toast } from "react-hot-toast";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/signup");
      return;
    }

    const timer = resendTimer > 0 && setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer, email, navigate]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    try {
      setLoading(true);
      await verifyOtp({ email, otp });
      toast.success("Email verified successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    try {
      setLoading(true);
      await resendOtp(email);
      toast.success("OTP resent successfully!");
      setResendTimer(30);
    } catch (error) {
      toast.error(error.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">OTP Verification</h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter the verification code sent to<br />
          <span className="font-medium">{email}</span>
        </p>
        <form onSubmit={handleVerifyOtp}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the 6-digit OTP"
              maxLength={6}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200 disabled:opacity-50 mb-4"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resendTimer > 0 || loading}
              className="text-orange-500 hover:text-orange-600 disabled:text-gray-400"
            >
              {resendTimer > 0
                ? `Resend OTP in ${resendTimer}s`
                : "Resend OTP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;