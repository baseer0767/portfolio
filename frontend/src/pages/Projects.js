import React from "react";

const projects = [
  {
    title: "Audience Engagement Analytics App",
    description:
      "Built a real-time human detection and gaze-tracking system using YOLOv8 and OpenCV. Logged daily analytics into structured CSV files.",
    tech: ["Python", "YOLOv8", "OpenCV"],
    github: "https://github.com/baseer0767/Audience_Engage_Analytics.git",
  },
  {
    title: "Air Quality Monitoring System",
    description:
      "Developed a real-time air monitoring system using ESP32 and DHT11 sensor, sending data to a Node.js-based web server via Wi-Fi and stored it in database.",
    tech: ["ESP32", "Node.js", "MongoDB"],
    github: "https://github.com/baseer0767/Air-Quality-Moonitoring-system.git",
  },
  {
    title: "Edulearn – Learning Platform",
    description:
      "Full-stack Coursera-style web app with user auth, course management, and admin dashboard. Built with Django and MySQL.",
    tech: ["Django", "MySQL", "JavaScript"],
    github: "https://github.com/baseer0767/Edulearn.git",
  },
  {
    title: "Image Classification with ResNet50",
    description:
      "Implemented galaxy image classification using ResNet50 architecture with TensorFlow and Keras. Evaluated performance via confusion matrix.",
    tech: ["Python", "TensorFlow", "Keras"],
    github: "https://github.com/baseer0767/Image-Classification.git",
  },
  {
    title: "Online Furniture Shop",
    description:
      "Developed a full-stack eCommerce web app using Django and MySQL with HTML, CSS, and JavaScript frontend.",
    tech: ["Django", "MySQL", "JavaScript"],
    github: "https://github.com/baseer0767/Online_Furniture_Shop.git",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Built a neural network model in Python to recognize handwritten digits with high accuracy.",
    tech: ["Python", "TensorFlow", "Deep Learning"],
    github: "https://github.com/baseer0767/AI_PROJECT.git",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-blue-50 py-16 px-4 sm:px-6">
      {/* Header */}
      <div
        className="max-w-6xl mx-auto text-center mb-12"
        data-aos="fade-down"
      >
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Projects
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
          Highlights of my technical experience across machine learning,
          embedded systems, and full-stack platforms.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-blue-800 hover:underline mb-2 inline-block break-words"
              >
                {project.title}
              </a>
              <p className="text-gray-700 text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white text-sm px-4 py-1 rounded-full w-fit hover:bg-blue-800 transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/baseer0767?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
        >
          See More Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
