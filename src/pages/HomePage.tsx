import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuestHeader } from '../components/GuestHeader';
import { GuestFooter } from '../components/GuestFooter';
import { ChevronDownIcon } from 'lucide-react';
import '../styles/HomePage.css';
export function HomePage() {
  const navigate = useNavigate();
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const courseData = {
    'Certificate Level': [{
      id: 1,
      title: 'Information Technology',
      description: 'Great for beginners to build a strong foundation in Information Technology.',
      image: '/IT.png'
    }, {
      id: 2,
      title: 'Biomedical Science',
      description: 'Covers theory and practical skills in biomedical science.',
      image: '/BMS.jpg'
    }, {
      id: 3,
      title: 'Management',
      description: 'Great for beginners to build a strong foundation in Information Technology.',
      image: '/MGT.jpg'
    }, {
      id: 4,
      title: 'Law',
      description: 'Final year studies to complete a full law degree (LLB).',
      image: '/LAW.jpg'
    }],
    'Diploma Level': [{
      id: 5,
      title: 'Information Technology',
      description: 'Great for beginners to build a strong foundation in Information Technology.',
      image: '/IT.png'
    }, {
      id: 6,
      title: 'Biomedical Science',
      description: 'Covers theory and practical skills in biomedical science.',
      image: '/BMS.jpg'
    }, {
      id: 7,
      title: 'Management',
      description: 'Provides advanced knowledge equal to the first 2 years of a management degree...',
      image: '/MGT.jpg'
    }, {
      id: 8,
      title: 'Law',
      description: 'Final year studies to complete a full law degree (LLB).',
      image: '/LAW.jpg'
    }],
    'HND Level': [{
      id: 9,
      title: 'Information Technology',
      description: 'Great for beginners to build a strong foundation in Information Technology.',
      image: '/IT.png'
    }, {
      id: 10,
      title: 'Biomedical Science',
      description: 'Covers theory and practical skills in biomedical science.',
      image: '/BMS.jpg'
    }, {
      id: 11,
      title: 'Management',
      description: 'Provides advanced knowledge equal to the first 2 years of a management degree...',
      image: '/MGT.jpg'
    }, {
      id: 12,
      title: 'Law',
      description: 'Final year studies to complete a full law degree (LLB).',
      image: '/LAW.jpg'
    }],
    'TOP - UP Level': [{
      id: 13,
      title: 'Information Technology',
      description: 'Great for beginners to build a strong foundation in Information Technology.',
      image: '/IT.png'
    }, {
      id: 14,
      title: 'Biomedical Science',
      description: 'Covers theory and practical skills in biomedical science.',
      image: '/BMS.jpg'
    }, {
      id: 15,
      title: 'Management',
      description: 'Provides advanced knowledge equal to the first 2 years of a management degree...',
      image: '/MGT.jpg'
    }, {
      id: 16,
      title: 'Law',
      description: 'Final year studies to complete a full law degree (LLB).',
      image: '/LAW.jpg'
    }]
  };
  const sectionIds: {
    [key: string]: string;
  } = {
    'Certificate Level': 'certificate-level',
    'Diploma Level': 'diploma-level',
    'HND Level': 'hnd-level',
    'TOP - UP Level': 'topup-level'
  };
  return <div className="guest-home-page">
      <GuestHeader />

      <div className="guest-home-content">
        {/* Hero Section */}
        <section className="guest-hero-section">
          <div className="guest-hero-left">
            <h1 className="guest-hero-title">
              Enhance Your Skills
              <br />
              With Our Courses
            </h1>
            <p className="guest-hero-subtitle">
              Flexible, expert-led courses to help you achieve your career
              goals.
            </p>
            <button className="guest-hero-btn" onClick={() => navigate('/guest/register/student')}>
              Register Now
            </button>
          </div>
          <div className="guest-hero-right">
            <img src="/Hero-Logo.png" alt="H & R Skills" className="guest-hero-logo" />
          </div>
        </section>

        {/* Our Programs Section */}
        <section id="programs" className="guest-programs-section">
          <h2 className="guest-section-title">Our Programs</h2>
          <p className="guest-section-subtitle">
            Find the perfect program to advance your career.
          </p>

          {Object.entries(courseData).map(([level, courses]) => <div key={level} id={sectionIds[level]} className="guest-program-level">
              <h3 className="guest-level-title">{level}</h3>
              <div className="guest-course-grid">
                {courses.slice(0, expandedLevel === level ? courses.length : 4).map(course => <div key={course.id} className="guest-course-card">
                      <img src={course.image} alt={course.title} className="guest-course-image" />
                      <div className="guest-course-content">
                        <h4 className="guest-course-title">{course.title}</h4>
                        <p className="guest-course-description">
                          {course.description}
                        </p>
                      </div>
                    </div>)}
              </div>
              <button className="guest-view-more-btn" onClick={() => setExpandedLevel(expandedLevel === level ? null : level)}>
                View More <ChevronDownIcon className="guest-chevron-icon" />
              </button>
            </div>)}
        </section>

        {/* Why Choose Us Section */}
        <section className="guest-why-section">
          <div className="guest-why-left">
            <img src="/Graduate.png" alt="Graduate" className="guest-why-image" />
          </div>
          <div className="guest-why-right">
            <h2 className="guest-why-title">Why Choose Us ?</h2>
            <p className="guest-why-intro">
              At our LMS platform, we are committed to delivering high-quality
              education that is accessible, practical, and tailored to your
              academic and career success. Here's why students choose us:
            </p>
            <ul className="guest-why-list">
              <li>
                <strong>1. Expert Instructors</strong> – Learn from industry
                professionals with real-world experience.
              </li>
              <li>
                <strong>2. Flexible Access</strong> – Study anytime, anywhere,
                and at your own pace.
              </li>
              <li>
                <strong>3. Certified Courses</strong> – Earn certifications that
                are recognized and valued.
              </li>
              <li>
                <strong>4. Affordable Fees</strong> – Access top-tier education
                without breaking the bank.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <GuestFooter />
    </div>;
}