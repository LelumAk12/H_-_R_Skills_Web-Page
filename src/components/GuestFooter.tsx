import { useNavigate, useLocation } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import '../styles/GuestFooter.css';
export function GuestFooter() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToProgramsSection = () => {
    if (location.pathname !== '/guest/home') {
      navigate('/guest/home');
      setTimeout(() => {
        const programsSection = document.getElementById('programs');
        if (programsSection) {
          programsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const programsSection = document.getElementById('programs');
      if (programsSection) {
        programsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  return <footer className="guest-footer">
      <div className="guest-footer-content">
        <div className="guest-footer-section">
          <div className="guest-footer-logo-wrapper">
            <img src="/Footer-Logo.jpg" alt="H & R Skills" className="guest-footer-logo" />
            <div className="guest-footer-brand">
            </div>
          </div>
          <div className="guest-footer-social">
            <button className="guest-footer-social-btn">
              <FacebookIcon className="guest-footer-social-icon" />
            </button>
            <button className="guest-footer-social-btn">
              <InstagramIcon className="guest-footer-social-icon" />
            </button>
            <button className="guest-footer-social-btn">
              <MessageCircle className="guest-footer-social-icon" />
            </button>
            <button className="guest-footer-social-btn">
              <YoutubeIcon className="guest-footer-social-icon" />
            </button>
          </div>
        </div>

        <div className="guest-footer-section">
          <h3 className="guest-footer-heading">QUICK LINKS</h3>
          <ul className="guest-footer-links">
            <li>
              <button onClick={() => navigate('/guest/home')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate('/guest/about')}>About</button>
            </li>
            <li>
              <button onClick={scrollToProgramsSection}>Courses</button>
            </li>
            <li>
              <button onClick={() => navigate('/guest/contact')}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="guest-footer-section">
          <h3 className="guest-footer-heading">OUR CONTACTS</h3>
          <div className="guest-footer-contact">
            <p>
              <strong>Address:</strong>
            </p>
            <p>*****************</p>
            <p>
              <strong>Phone No:</strong>
            </p>
            <p>*** *** ****</p>
            <p>
              <strong>Email:</strong>
            </p>
            <p>*****@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="guest-footer-bottom">
        <p>
          2025 © All Rights Reserved | H & R Skills Pvt Ltd | Designed &
          Developed by{' '}
          <a href="https://everefficient.lk/" target="_blank" rel="noopener noreferrer" className="guest-footer-link">
            EVER EFFICIENT Business Management (Pvt) Ltd.
          </a>
        </p>
      </div>
    </footer>;
}