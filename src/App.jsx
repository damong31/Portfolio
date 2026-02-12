import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="stars"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Damon Gardner</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#projects">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Hello, I'm <span>Damon Gardner</span></h1>
      <p>Frontend Developer | Data Engineer | UI Designer</p>
      <a 
          href="https://github.com/damong31" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
        >
          View My Work
</a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I am currently pursuing a Masters in Computer Science at Ball State University, where I have developed a strong foundation in software development, data engineering, and UI design. With a passion for creating efficient and user-friendly applications, I have worked on various projects that showcase my skills in these areas. I am eager to apply my knowledge and experience to real-world challenges.
      </p>
    </section>
  );
}

function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "R",
    "Git",
    "C#",
    ".NET"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}


function Projects() {
  const projectList = [
    {
      title: "Bus Shuttle Project",
      description: "An application built to help manage bus shuttle services efficiently.",
      link: "https://github.com/damong31/CS690-BusShuttleProject"
    },
    {
      title: "YouTube Comments Scraper",
      description: "A tool to scrape and analyze YouTube comments for insights.",
      link: "https://github.com/damong31/YouTubeData/tree/main"
    },
    {
      title: "Expense Tracker",
      description: "An application to track and manage personal expenses.",
      link: "https://github.com/damong31/ExpenseTracker"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn small"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email: Ddgardnerjr@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/damon-gardner-jr-b21739147" target="_blank" rel="noopener noreferrer">linkedin.com/in/damon-gardner-jr-b21739147</a></p>
      <p>
        GitHub: 
        <a 
          href="https://github.com/damong31" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
        >
          github.com/damong31
        </a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Damon Gardner. All rights reserved.</p>
    </footer>
  );
}
