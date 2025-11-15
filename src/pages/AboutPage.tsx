import { GuestHeader } from '../components/GuestHeader';
import { GuestFooter } from '../components/GuestFooter';
import '../styles/AboutPage.css';
export function AboutPage() {
  const teamMembers = [{
    id: 1,
    name: 'Dinuka Perera',
    role: 'Ceo',
    description: 'Provides overall leadership, sets the vision, and ensures the success and growth of the platform.',
    image: '/CEO.jpg'
  }, {
    id: 2,
    name: 'Nethmi Ranasinghe',
    role: 'Academic Coordinator',
    description: 'Manages course planning, maintains content quality, and supports instructors in delivering effective lessons.',
    image: '/Coordinator.jpg'
  }, {
    id: 3,
    name: 'Mihira Madushanka',
    role: 'Course Instructor',
    description: 'Delivers lessons, guides the learning process, and provides academic support.',
    image: '/Instructor.jpg'
  }];
  return <div className="guest-about-page">
      <GuestHeader />

      <div className="guest-about-content">
        {/* Hero Section */}
        <section className="guest-about-hero">
          <div className="guest-about-hero-left">
            <h1 className="guest-about-hero-title">About Us</h1>
            <p className="guest-about-hero-subtitle">
              We provide career-focused courses in IT, Biomedical Science,
              Management, and Law to help you grow and succeed.
            </p>
          </div>
          <div className="guest-about-hero-right">
            <img src="/Hero-Logo.png" alt="H & R Skills" className="guest-about-hero-logo" />
          </div>
        </section>

        {/* Our Story Section */}
        <section className="guest-story-section">
          <h2 className="guest-story-title">Our Story</h2>
          <p className="guest-story-text">
            We started with a goal to make education more accessible and
            practical for students. Our platform brings together expert
            knowledge and modern technology to support learning across various
            fields.
          </p>

          <div className="guest-vision-mission">
            <div className="guest-vm-card">
              <h3 className="guest-vm-title">Our Vision</h3>
              <p className="guest-vm-text">
                To be a trusted platform that empowers students with the skills
                and knowledge needed for a successful future.
              </p>
            </div>
            <div className="guest-vm-card">
              <h3 className="guest-vm-title">Our Mission</h3>
              <p className="guest-vm-text">
                To deliver quality, flexible, and career-focused education
                through innovative tools, expert guidance, and a supportive
                learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Meet The Team Section */}
        <section className="guest-team-section">
          <h2 className="guest-team-title">Meet The Team</h2>
          <p className="guest-team-subtitle">
            A dedicated team working together to support your learning journey.
          </p>

          <div className="guest-team-grid">
            {teamMembers.map(member => <div key={member.id} className="guest-team-card">
                <img src={member.image} alt={member.name} className="guest-team-image" />
                <h3 className="guest-team-name">{member.name}</h3>
                <p className="guest-team-role">{member.role}</p>
                <p className="guest-team-description">{member.description}</p>
              </div>)}
          </div>
        </section>
      </div>

      <GuestFooter />
    </div>;
}