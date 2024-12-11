/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1675859364880-198e17c9376a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww"
            // alt="Profile"
            // className="rounded-full shadow-lg w-3/4 mx-auto"
          />
        </div>

        {/* Description and Timeline */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600">
            I'm a passionate web developer with a knack for building beautiful,
            user-friendly websites and applications. With a focus on clean code
            and responsive design, I aim to deliver exceptional user experiences.
          </p>

          {/* Timeline */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
            <ul className="mt-4 space-y-4">
              <li className="relative pl-6">
                <span className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full"></span>
                <h4 className="text-lg font-medium text-gray-800">MLops Internship</h4>
                <p className="text-gray-600">LinuxWorld Informatics Pvt Ltd (May 2021 - Aug 2021)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
