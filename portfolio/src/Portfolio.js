import React from "react";
import "./App.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo">E</div>
        <ul className="nav-links">
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <input type="text" placeholder="Search" className="search-bar" />
      </nav>

      <header className="header-section">
        <div className="header-content">
          <h1 className="title">
            I'm <span className="highlight">Eidhaart</span>
          </h1>
          <p className="subtitle">Web Developer & Digital Artist</p>
          <p className="description">
            I create modern web applications with a unique artistic touch.
            Bringing code and creativity together.
          </p>
          <button className="contact-button">Contact Me</button>
        </div>
        <div className="header-image">
          <img src="your-photo.jpg" alt="Eidhaart" />
        </div>
      </header>

      <div className="social-links">
        <a href="#!" className="social-link">
          Facebook
        </a>
        <a href="#!" className="social-link">
          LinkedIn
        </a>
        <a href="#!" className="social-link">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
