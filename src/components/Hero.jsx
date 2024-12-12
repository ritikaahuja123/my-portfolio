import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-gradient-to-br from-gray-100 to-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Build <span className="bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text">Exceptional</span> Digital Solutions
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            I’m Ritika Ahuja, a developer specializing in creating user-centric websites
            and applications that elevate brands and solve problems.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              to="/projects"
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2">
          <img
            src="https://paytmblogcdn.paytm.com/wp-content/uploads/2024/08/Blog_Paytm_Portfolio-Diversification.webp"
            alt="Hero Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
