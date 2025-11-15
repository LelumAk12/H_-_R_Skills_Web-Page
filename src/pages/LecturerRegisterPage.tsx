import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import '../styles/LecturerRegisterPage.css';
export function LecturerRegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    contactNumber: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Lecturer registration:', formData);
    alert('Account created successfully!');
    navigate('/lecturer/login');
  };
  return <div className="lecturer-register-page">
      <div className="lecturer-register-card">
        <div className="lecturer-register-left">
          <img src="/Register-Logo.png" alt="H & R Skills" className="lecturer-register-logo" />
        </div>

        <div className="lecturer-register-right">
          <h2 className="lecturer-register-title">Create Your Account</h2>

          <div className="lecturer-register-tabs">
            <button className="lecturer-register-tab" onClick={() => navigate('/guest/register/student')}>
              Student
            </button>
            <button className="lecturer-register-tab active">Lecture</button>
          </div>

          <form onSubmit={handleSubmit} className="lecturer-register-form">
            <div className="lecturer-register-form-group">
              <label className="lecturer-register-label">Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className="lecturer-register-input" required />
            </div>

            <div className="lecturer-register-form-group">
              <label className="lecturer-register-label">Email</label>
              <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} className="lecturer-register-input" required />
            </div>

            <div className="lecturer-register-form-group">
              <label className="lecturer-register-label">Subject</label>
              <input type="text" name="subject" placeholder="e.g. Information Technology" value={formData.subject} onChange={handleChange} className="lecturer-register-input" required />
            </div>

            <div className="lecturer-register-form-group">
              <label className="lecturer-register-label">Contact Number</label>
              <input type="tel" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} className="lecturer-register-input" required />
            </div>

            <div className="lecturer-register-form-group">
              <label className="lecturer-register-label">Password</label>
              <div className="lecturer-register-password-wrapper">
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter a strong password" value={formData.password} onChange={handleChange} className="lecturer-register-input" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="lecturer-register-password-toggle">
                  {showPassword ? <EyeOffIcon className="lecturer-register-icon" /> : <EyeIcon className="lecturer-register-icon" />}
                </button>
              </div>
            </div>

            <div className="lecturer-register-form-group">
              <label className="lecturer-register-label">
                Confirm Password
              </label>
              <div className="lecturer-register-password-wrapper">
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} className="lecturer-register-input" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="lecturer-register-password-toggle">
                  {showConfirmPassword ? <EyeOffIcon className="lecturer-register-icon" /> : <EyeIcon className="lecturer-register-icon" />}
                </button>
              </div>
            </div>

            <button type="submit" className="lecturer-register-button">
              Create Account
            </button>

            <p className="lecturer-register-login">
              Already Have an account?{' '}
              <button type="button" onClick={() => navigate('/lecturer/login')}>
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>;
}