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
  const [formErrors, setFormErrors] = useState<{[k:string]: string}>({});
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotSuccess, setForgotSuccess] = useState<string | null>(null);
  const [forgotLoading, setForgotLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validate
    const errors: {[k:string]: string} = {};
    if (!formData.email) {
      errors.email = 'Email or username is required';
    } else if (!validateEmail(formData.email) && !/^[^\s@]+$/.test(formData.email)) {
      // allow username without @ but disallow spaces
      // if it looks like an email, validate email format
      if (formData.email.includes('@')) errors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    console.log('Login:', formData);
    // For demo purposes, navigate to lecturer profile
    navigate('/lecturer/profile');
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const openForgot = () => {
    setForgotEmail('');
    setForgotError(null);
    setForgotSuccess(null);
    setShowForgot(true);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    setForgotSuccess(null);

    if (!forgotEmail) {
      setForgotError('Please enter your email address.');
      return;
    }

    if (!validateEmail(forgotEmail)) {
      setForgotError('Please enter a valid email address.');
      return;
    }

    // Simulate async request
    setForgotLoading(true);
    setTimeout(() => {
      setForgotLoading(false);
      setForgotSuccess('If that email is registered, a password reset link has been sent.');
    }, 1100);
  };
  return <div className="guest-login-page">
      <div className="guest-login-card">
        <div className="guest-login-left">
          <img src="/Register-Logo.png" alt="H & R Skills" className="guest-login-logo" />
        </div>

        <div className="guest-login-right">
          <h2 className="guest-login-title">Welcome Back</h2>
          <p className="guest-login-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="guest-login-form" noValidate>
            <div className="guest-login-form-group">
              <label className="guest-login-label">Email or Username</label>
              <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className={`guest-login-input ${formErrors.email ? 'input-error' : ''}`} />
              {formErrors.email && <p className="guest-login-error">{formErrors.email}</p>}
            </div>

            <div className="guest-login-form-group">
              <label className="guest-login-label">Password</label>
              <div className="guest-login-password-wrapper">
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} className={`guest-login-input ${formErrors.password ? 'input-error' : ''}`} />
                {formErrors.password && <p className="guest-login-error">{formErrors.password}</p>}
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="guest-login-password-toggle">
                  {showPassword ? <EyeOffIcon className="guest-login-icon" /> : <EyeIcon className="guest-login-icon" />}
                </button>
              </div>
            </div>

            <div className="guest-login-forgot">
              <button type="button" onClick={() => openForgot()}>Forgot Password?</button>
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
        {showForgot && <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card" role="document">
            <button type="button" className="modal-close" aria-label="Close" onClick={() => setShowForgot(false)}>×</button>
            <h3 className="modal-title">Reset your password</h3>
            <p className="modal-sub">Enter the email address associated with your account. We'll send a link to reset your password.</p>
            <form onSubmit={handleForgotSubmit} className="modal-form">
              <label className="modal-label">Email</label>
              <input
                type="email"
                className="modal-input"
                placeholder="you@domain.com"
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                autoFocus
              />
              {forgotError && <p className="modal-error">{forgotError}</p>}
              {forgotSuccess && <p className="modal-success">{forgotSuccess}</p>}

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowForgot(false)} disabled={forgotLoading}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={forgotLoading}>{forgotLoading ? 'Sending...' : 'Send reset link'}</button>
              </div>
            </form>
          </div>
        </div>}
      </div>;
}