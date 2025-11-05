import axios from './Axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/auth/local/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const verifyOtp = async (verificationData) => {
  try {
    const response = await axios.post('/auth/verify-email', verificationData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const resendOtp = async (email) => {
  try {
    const response = await axios.post('/auth/resend-otp', { email });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post('/auth/local', credentials);
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};