import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import '../styles/LoginPage.css';
export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
    // For demo purposes, navigate to lecturer profile
    navigate('/lecturer/profile');
  };
  return <div className="guest-login-page">
      <div className="guest-login-card">
        <div className="guest-login-left">
          <img src="/Register-Logo.png" alt="H & R Skills" className="guest-login-logo" />
        </div>

        <div className="guest-login-right">
          <h2 className="guest-login-title">Welcome Back</h2>
          <p className="guest-login-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="guest-login-form">
            <div className="guest-login-form-group">
              <label className="guest-login-label">Email or Username</label>
              <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="guest-login-input" required />
            </div>

            <div className="guest-login-form-group">
              <label className="guest-login-label">Password</label>
              <div className="guest-login-password-wrapper">
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} className="guest-login-input" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="guest-login-password-toggle">
                  {showPassword ? <EyeOffIcon className="guest-login-icon" /> : <EyeIcon className="guest-login-icon" />}
                </button>
              </div>
            </div>

            <div className="guest-login-forgot">
              <button type="button">Forgot Password?</button>
            </div>

            <button type="submit" className="guest-login-button">
              Log In
            </button>

            <p className="guest-login-signup">
              Don't have an account?{' '}
              <button type="button" onClick={() => navigate('/guest/register/student')}>
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>;
}