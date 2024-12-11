import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A clean, responsive, and interactive portfolio website built to showcase my skills, projects, and professional journey. The website is designed with a modern aesthetic and features a user-friendly interface to engage potential employers or clients.',
    details: 'Key Features: 1)Hero Section: A visually captivating introduction with a call-to-action button. 2)About Section: Highlights my professional background with an image and a detailed timeline of experience. 3)Projects Section: Interactive project cards with hover effects, linking to detailed pages for each project. 4)Contact Section: A functional contact form integrated with email services for seamless communication. 5)Responsive Design: Optimized for all devices, including desktops, tablets, and mobile phones. 6)Technologies Used: i)Frontend: React.js, Tailwind CSS ii)Deployment: GitHub Pages',
  },
  {
    id: 2,
    title: 'Study Nation',
    description: 'Study Nation is an online learning platform designed to provide users with access to a wide range of educational resources and self-paced courses. The platform offers features like user registration and authentication, course enrollment, progress tracking, and interactive discussion forums. It allows educators to upload course content and students to access and engage with the material, fostering an interactive learning environment.',
    details:'Key Features: 1)User Registration & Authentication: Secure account creation and login for users. 2)Course Management: Educators can create and manage courses with videos, articles, and quizzes. 3)Responsive Design: Ensures seamless access across desktops, tablets, and mobile devices. 4)Technologies Used: i)Frontend: HTML, CSS, JavaScript ii)Backend: Python, Django Framework iii)Database: SQLite',
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800">Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-6 border hover:border-primary transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(project.id)}
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <span
                  className={`text-primary transform transition-transform ${
                    expanded === project.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {expanded === project.id && (
                <div className="mt-4 text-gray-700 border-t pt-4">
                  <p>{project.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
