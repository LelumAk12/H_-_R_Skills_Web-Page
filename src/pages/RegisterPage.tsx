import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import '../styles/RegisterPage.css';
type UserType = 'student' | 'lecturer';
export function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // Determine initial user type from URL
  const initialUserType: UserType = location.pathname.includes('lecturer') ? 'lecturer' : 'student';
  const [userType, setUserType] = useState<UserType>(initialUserType);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    username: '',
    subject: '',
    password: '',
    confirmPassword: ''
  });
  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    // Update URL without page reload
    const newPath = type === 'student' ? '/guest/register/student' : '/guest/register/lecturer';
    window.history.pushState({}, '', newPath);
  };
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
    console.log(`${userType} registration:`, formData);
    alert('Account created successfully!');
    if (userType === 'student') {
      navigate('/guest/login');
    } else {
      navigate('/lecturer/login');
    }
  };
  return <div className={`register-page ${userType}-theme`}>
      <div className="register-card">
        <div className="register-left">
          <img src="/Register-Logo.png" alt="H & R Skills" className="register-logo" />
        </div>

        <div className="register-right">
          <h2 className="register-title">Create Your Account</h2>

          <div className="register-tabs">
            <button className={`register-tab ${userType === 'student' ? 'active' : ''}`} onClick={() => handleUserTypeChange('student')}>
              Student
            </button>
            <button className={`register-tab ${userType === 'lecturer' ? 'active' : ''}`} onClick={() => handleUserTypeChange('lecturer')}>
              Lecture
            </button>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-form-row">
              <div className="register-form-group">
                <label className="register-label">First Name</label>
                <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} className="register-input" required />
              </div>
              <div className="register-form-group">
                <label className="register-label">Last Name</label>
                <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} className="register-input" required />
              </div>
            </div>

            <div className="register-form-group">
              <label className="register-label">Email</label>
              <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} className="register-input" required />
            </div>

            {userType === 'student' ? <div className="register-form-group">
                <label className="register-label">Username</label>
                <input type="text" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} className="register-input" required />
              </div> : <div className="register-form-group">
                <label className="register-label">Subject</label>
                <input type="text" name="subject" placeholder="e.g. Information Technology" value={formData.subject} onChange={handleChange} className="register-input" required />
              </div>}

            <div className="register-form-group">
              <label className="register-label">Contact Number</label>
              <input type="tel" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} className="register-input" required />
            </div>

            <div className="register-form-group">
              <label className="register-label">Password</label>
              <div className="register-password-wrapper">
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter a strong password" value={formData.password} onChange={handleChange} className="register-input" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="register-password-toggle">
                  {showPassword ? <EyeOffIcon className="register-icon" /> : <EyeIcon className="register-icon" />}
                </button>
              </div>
            </div>

            <div className="register-form-group">
              <label className="register-label">Confirm Password</label>
              <div className="register-password-wrapper">
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} className="register-input" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="register-password-toggle">
                  {showConfirmPassword ? <EyeOffIcon className="register-icon" /> : <EyeIcon className="register-icon" />}
                </button>
              </div>
            </div>

            <button type="submit" className="register-button">
              Create Account
            </button>

            <p className="register-login">
              Already Have an account?{' '}
              <button type="button" onClick={() => navigate(userType === 'student' ? '/guest/login' : '/lecturer/login')}>
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>;
}