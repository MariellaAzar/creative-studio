import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";


function Navbar() {
  const navigate = useNavigate();

  const reloadHome = () => {
    window.location.href = '/'; 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={reloadHome}>
        <img src="/assets/CS.png" alt="Logo" className="logo-img" />
        <div className="logo-text">Creative Studio</div>
      </div>

      <div className="nav-center">
        <span onClick={() => navigate('/')}>About</span>
        <span onClick={() => navigate('/team')}>Team</span>
        <span onClick={() => navigate('/book')}>Book</span>
        <span onClick={() => navigate('/gallery')}>Gallery</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
      </div>
    </nav>
  );
}


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <header className="hero">
        <h1>Dive Into a Sea of Inspiration</h1>
        <button className="book-btn" onClick={() => navigate('/book')}>
          Book Now.
        </button>
      </header>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are a creative studio offering engaging and inspiring art courses for all age ranges.
          Whether you're discovering a new passion or refining your skills, we provide hands-on guidance
          in painting, sculpture, fashion design, pottery, and textile art. Join a community where creativity flows freely! 🎨
        </p>
      </section>
      <Footer />
    </div>
  );
}



function BookingPage() {
  const [form, setForm] = React.useState({
    name: '',
    age: '',
    date: '',
    course: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: form });
  };
const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="booking-form">
        <h2>Reserve Your Spot</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />

          <label>Age:</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} required />

          <label>Select Course:</label>
          <select name="course" value={form.course} onChange={handleChange} required>
            <option value="">Choose a course</option>
            <option value="Design Mode + Conception">Design Mode + Conception</option>
            <option value="Painting">Painting</option>
            <option value="Sculpture">Sculpture</option>
          </select>

          <label>Date:</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}


function ConfirmationPage() {
  const location = useLocation();
  const { name, course, date } = location.state || {};

  if (!name || !course || !date) {
    return (
      <div className="confirmation-page">
        <Navbar />
        <h2>Whoops! No booking found</h2>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <Navbar />
      <div className="confirmation-box">
        <h2>Thank you, {name} !</h2>
        <p>Your course of <strong>{course}</strong> has been booked for <strong>{date}</strong>.</p>
        <p>We cant wait to see you! 🌟🎨</p>
      </div>
    </div>
  );
}
function ServicesPage() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Our Creative Services</h2>
        <ul>
          <li>🎨 Painting</li>
          <li>🪵 Sculpture</li>
          <li>🧵 Fashion Design</li>
          <li>🪴 Pottery</li>
          <li>🧶 Textile Art</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Contact Us</h2>
        <p>📞 Phone: (555) 123-4567</p>
        <p>📧 Email: info@creativestudio.fake</p>
        <div style={{ marginTop: '2rem' }}>
          <img
            src="./src/assets/map.png"
            alt="Map"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}


function Footer() {
  return (
    <footer style={{
      backgroundColor: '#00BFFF',
      color: '#FFD700',
      textAlign: 'center',
      padding: '1rem',
      marginTop: 'auto'
    }}>
      Made with ❤️ by Mariella Azar
    </footer>
  );
}

function TeamPage() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Meet Our Instructors</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/assets/teacher1.jpg" alt="Teacher 1" />
            <h4>Marie L.</h4>
            <p>Expert in Sculpture & Clay Art</p>
          </div>
          <div className="team-member">
            <img src="/assets/teacher2.jpg" alt="Teacher 2" />
            <h4>Lucy P.</h4>
            <p>Fashion & Textile Designer</p>
          </div>
          <div className="team-member">
            <img src="/assets/teacher3.jpg" alt="Teacher 3" />
            <h4>Anaïs C.</h4>
            <p>Painting Instructor</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function GalleryPage() {
  const images = [
    '/assets/gallery1.jpg',
    '/assets/gallery2.jpg',
    '/assets/gallery3.jpg',
    '/assets/gallery4.jpg'
  ];

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i}`} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/book" element={<BookingPage />} />
    <Route path="/confirmation" element={<ConfirmationPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/team" element={<TeamPage />} />
  </Routes>

    </Router>
  );
}

export default App;
