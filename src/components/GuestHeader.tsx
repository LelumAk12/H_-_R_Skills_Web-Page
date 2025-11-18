import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from 'lucide-react';
import '../styles/GuestHeader.css';
export function GuestHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const courseLevels = [{
    label: 'Certificate',
    sectionId: 'certificate-level'
  }, {
    label: 'Diploma',
    sectionId: 'diploma-level'
  }, {
    label: 'HND',
    sectionId: 'hnd-level'
  }, {
    label: 'TOP - UP',
    sectionId: 'topup-level'
  }];
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };
    if (isCoursesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCoursesOpen]);
  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };
  const scrollToSection = (sectionId: string) => {
    setIsCoursesOpen(false);
    if (location.pathname !== '/guest/home') {
      navigate('/guest/home');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  return <header className="guest-header">
      <div className="guest-header-logo" onClick={() => navigate('/guest/home')}>
        <img src="/Logo.png" alt="H & R Skills" className="guest-header-logo-img" />
      </div>

      <nav className="guest-header-nav">
        <button onClick={() => navigate('/guest/home')} className="guest-nav-link">
          Home
        </button>
        <button onClick={() => navigate('/guest/about')} className="guest-nav-link">
          About
        </button>
        <div className="guest-nav-dropdown" ref={dropdownRef}>
          <button className="guest-nav-link dropdown-trigger" onClick={toggleCoursesDropdown}>
            Courses
            <ChevronDownIcon className="guest-nav-chevron" />
          </button>
          {isCoursesOpen && <div className="guest-dropdown-menu">
              {courseLevels.map(level => <button key={level.sectionId} className="guest-dropdown-item" onClick={() => scrollToSection(level.sectionId)}>
                  {level.label}
                </button>)}
            </div>}
        </div>
        <button onClick={() => navigate('/guest/contact')} className="guest-nav-link">
          Contact Us
        </button>
      </nav>

      <div className="guest-header-actions">
        <button onClick={() => navigate('/guest/login')} className="guest-btn-signin">
          Sign In
        </button>
        <button onClick={() => navigate('/guest/register/student')} className="guest-btn-signup">
          Sign Up
        </button>
      </div>
    </header>;
}