import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import '../styles/StudentRegisterPage.css';
export function StudentRegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    username: '',
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
    console.log('Student registration:', formData);
    alert('Account created successfully!');
    navigate('/guest/login');
  };
  return <div className="student-register-page">
      <div className="student-register-card">
        <div className="student-register-left">
          <img src="/Register-Logo.png" alt="H & R Skills" className="student-register-logo" />
        </div>

        <div className="student-register-right">
          <h2 className="student-register-title">Create Your Account</h2>

          <div className="student-register-tabs">
            <button className="student-register-tab active">Student</button>
            <button className="student-register-tab" onClick={() => navigate('/guest/register/lecturer')}>
              Lecture
            </button>
          </div>

          <form onSubmit={handleSubmit} className="student-register-form">
            <div className="student-register-form-row">
              <div className="student-register-form-group">
                <label className="student-register-label">First Name</label>
                <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} className="student-register-input" required />
              </div>
              <div className="student-register-form-group">
                <label className="student-register-label">Last Name</label>
                <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} className="student-register-input" required />
              </div>
            </div>

            <div className="student-register-form-group">
              <label className="student-register-label">Email</label>
              <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} className="student-register-input" required />
            </div>

            <div className="student-register-form-group">
              <label className="student-register-label">Contact Number</label>
              <input type="tel" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} className="student-register-input" required />
            </div>

            <div className="student-register-form-group">
              <label className="student-register-label">Username</label>
              <input type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} className="student-register-input" required />
            </div>

            <div className="student-register-form-group">
              <label className="student-register-label">Password</label>
              <div className="student-register-password-wrapper">
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter a strong password" value={formData.password} onChange={handleChange} className="student-register-input" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="student-register-password-toggle">
                  {showPassword ? <EyeOffIcon className="student-register-icon" /> : <EyeIcon className="student-register-icon" />}
                </button>
              </div>
            </div>

            <div className="student-register-form-group">
              <label className="student-register-label">Confirm Password</label>
              <div className="student-register-password-wrapper">
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} className="student-register-input" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="student-register-password-toggle">
                  {showConfirmPassword ? <EyeOffIcon className="student-register-icon" /> : <EyeIcon className="student-register-icon" />}
                </button>
              </div>
            </div>

            <button type="submit" className="student-register-button">
              Create Account
            </button>

            <p className="student-register-login">
              Already Have an account?{' '}
              <button type="button" onClick={() => navigate('/guest/login')}>
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>;
}