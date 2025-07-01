import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>🎓 Admin Management</h2>
        <ul className="nav-links">
          <li><a href="/">🏠Home</a></li>
          <li><a href="/reg">📋 Register Students</a></li>
          <li><a href="/ad">🔍 Search Students</a></li>
          <li><a href="/time">⏰ Get Time by Region</a></li>
          <li><a href="/av">📊 View All Students</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-section">
        <h1>Welcome to the <b>Admin Management System</b></h1>
        <p>This platform allows you to register, manage, and explore student records in an efficient way.</p>

        {/* Top Feature Row */}
        <div className="features">
          <a className="feature-box" href="/reg">📋 Register Students</a>
          <a className="feature-box" href="/ad">🔍 Search Students</a>
          <a className="feature-box" href="/time">⏰ Get Time by Region</a>
        </div>

        {/* Admin Info Section */}
        <section className="admin-info-section">
          <h2>👨‍💼 About the Administrator</h2>
          <p>
            The <b>Admin Management System</b> is overseen by <strong>Malipeddi Sekhar</strong>, 
            a dedicated system administrator responsible for maintaining and securing student data records.
          </p>
          <p>
            Sekhar ensures that every student's information is accurately stored, easily accessible,
            and efficiently maintained. He has designed this platform with a focus on usability, speed, 
            and modern design—making administrative tasks simpler for institutions.
          </p>
          <p>
            Whether it's registering a new student, searching for details, or checking region-specific times,
            this dashboard is built for real-time, role-based efficiency using React and Spring Boot.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sekhar | Built with ❤️ using React & Spring Boot</p>
        <div className="social-links">
          <a href="https://github.com/malipeddisekhar" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/malipeddi-sekhar-08650630b/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
