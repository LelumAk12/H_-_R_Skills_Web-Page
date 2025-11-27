import React, { useState } from 'react';
import { GuestHeader } from '../components/GuestHeader';
import { GuestFooter } from '../components/GuestFooter';
import '../styles/ContactPage.css';
export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{[k:string]: string}>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setSuccessMessage(null);
    const errors: {[k:string]: string} = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(formData.email)) errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // simulate submit
    console.log('Form submitted:', formData);
    setSuccessMessage('Message sent successfully! We will get back to you within 24 hours.');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };
  return <div className="guest-contact-page">
      <GuestHeader />

      <div className="guest-contact-content">
        <div className="guest-contact-header">
          <h1 className="guest-contact-title">Get in Touch</h1>
          <p className="guest-contact-subtitle">
            We're here to help. Fill out the form below, and our team will get
            back to you within 24 hours.
          </p>
        </div>

        <div className="guest-contact-main">
          <div className="guest-contact-form-wrapper">
            <form onSubmit={handleSubmit} className="guest-contact-form" noValidate>
              {successMessage && <p className="guest-contact-success">{successMessage}</p>}
              <div className="guest-contact-form-row">
                <div className="guest-contact-form-group">
                  <label className="guest-contact-label">Full Name</label>
                  <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className={`guest-contact-input ${formErrors.fullName ? 'input-error' : ''}`} />
                  {formErrors.fullName && <p className="guest-contact-error">{formErrors.fullName}</p>}
                </div>
                <div className="guest-contact-form-group">
                  <label className="guest-contact-label">Email Address</label>
                  <input type="email" name="email" placeholder="saduniperera@gmail.com" value={formData.email} onChange={handleChange} className={`guest-contact-input ${formErrors.email ? 'input-error' : ''}`} />
                  {formErrors.email && <p className="guest-contact-error">{formErrors.email}</p>}
                </div>
              </div>

              <div className="guest-contact-form-group">
                <label className="guest-contact-label">Subject</label>
                <input type="text" name="subject" placeholder="What is your question about?" value={formData.subject} onChange={handleChange} className={`guest-contact-input ${formErrors.subject ? 'input-error' : ''}`} />
                {formErrors.subject && <p className="guest-contact-error">{formErrors.subject}</p>}
              </div>

              <div className="guest-contact-form-group">
                <label className="guest-contact-label">Your Message</label>
                <textarea name="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} className={`guest-contact-textarea ${formErrors.message ? 'input-error' : ''}`} rows={6} />
                {formErrors.message && <p className="guest-contact-error">{formErrors.message}</p>}
              </div>

              <button type="submit" className="guest-contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="guest-contact-map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.95373631531677!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk" width="100%" height="100%" style={{
            border: 0,
            borderRadius: '12px'
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map" />
          </div>
        </div>
      </div>

      <GuestFooter />
    </div>;
}