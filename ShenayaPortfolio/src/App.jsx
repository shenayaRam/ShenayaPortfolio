import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import gifBackground from './assets/w1.gif'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // optional for arrows
import { Navigation } from "swiper/modules";
import project1 from './assets/p1.jpeg';

function App() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <section
        id="landing"
        className="landing-section"
        style={{
          backgroundImage: `url(${gifBackground})`,
          transform: `translateY(-${offsetY * 0.5}px)`,
        }}
      >
        <div className="content">
          <h1>Hi, I'm Shenaya</h1>
          <p>Creative, driven, and always curious about design & tech.</p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>UI/UX Design</li>
          <li>Data Analysis</li>
          <li>Python</li>
        </ul>
      </section>

  <section id="project" className="projects-section">
  <h2>My Projects</h2>
  <div className="projects-grid">
    <div className="project-card">
      <img src={project1} alt="Project 1" />
      <p>Weather App</p>
    </div>
    <div className="project-card">
      <img src={project1} alt="Project 2" />
      <p>Portfolio Website</p>
    </div>
    {/* Add more projects below as needed */}
  </div>
</section>


      <section id="marketing" className="other-section">
        <h2>Marketing Portfolio</h2>
        <p>
          Second-year Information Science student with a passion for creativity.
        </p>
      </section>
    </>
  );
}

export default App;
