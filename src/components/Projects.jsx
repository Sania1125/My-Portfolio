import { useState } from "react";

function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      name: "Vite React",
      description: "React setup using Vite — fast and modern.",
      message: "This project uses Vite for fast development in React. It supports hot reloading and modern JS features.",
      link: "https://github.com/Sania1125/vite-react"
    },
    {
      name: "Bank Management System",
      description: "Simple banking system using C++.",
      message: "A basic console-based app in C++ for deposit, withdrawal, and account management.",
      link: "https://github.com/Sania1125/Bank-Management-system"
    },
    {
      name: "Daily Brew",
      description: "Coffee app that shows daily brews.",
      message: "Displays a coffee of the day with smooth UI. A fun DOM and layout practice project.",
      link: "https://github.com/Sania1125/daily-brew"
    },
    {
      name: "Streamlit Website",
      description: "A data app built with Streamlit and Python.",
      message: "An interactive Python app for data visualization and user inputs using Streamlit.",
      link: "https://github.com/Sania1125/streamlit-website-python"
    },
    {
      name: "Google Sign-In Clone",
      description: "Clone of Google Sign-In page styled for practice.",
      message: "Styled with HTML & CSS. Looks like Google’s sign-in page for front-end practice.",
      link: "https://github.com/Sania1125/Google_Sign-in_-pg-clone-"
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setSelected(index === selected ? null : index)}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
            {selected === index && (
              <p className="project-message">{project.message}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
