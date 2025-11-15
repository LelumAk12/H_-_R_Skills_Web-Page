import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from 'lucide-react';
import '../styles/GuestHeader.css';
export function GuestHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeCourseLevel, setActiveCourseLevel] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const courseLevels = ['Certificate', 'Diploma', 'HND', 'TOP - UP'];
  const courseCategories = ['IT', 'Biomedical Science', 'Management', 'Law'];
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
        setActiveCourseLevel(null);
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
    if (isCoursesOpen) {
      setActiveCourseLevel(null);
    }
  };
  const scrollToProgramsSection = () => {
    setIsCoursesOpen(false);
    setActiveCourseLevel(null);
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
              {courseLevels.map(level => <div key={level} className="guest-dropdown-item" onMouseEnter={() => setActiveCourseLevel(level)} onMouseLeave={() => setActiveCourseLevel(null)}>
                  <span>{level}</span>
                  {activeCourseLevel === level && <div className="guest-dropdown-submenu">
                      {courseCategories.map(category => <button key={category} className="guest-dropdown-subitem" onClick={scrollToProgramsSection}>
                          {category}
                        </button>)}
                    </div>}
                </div>)}
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