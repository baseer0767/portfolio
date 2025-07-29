import React, { useState } from "react";

function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      image: "/Gen AI with LLM.jpg",
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI & AWS",
      link: "Gen AI with LLM.pdf",
      alt: "Generative AI",
      bgColor: "bg-yellow-100",
    },
    {
      image: "/Google.jpg",
      title: "Google Prompting Essentials for Artificial Intelligence",
      issuer: "Google",
      link: "Google Prompting Essentials.pdf",
      alt: "Google Prompting Essentials",
      bgColor: "bg-green-100",
    },
    {
      image: "/Azure DevOps.jpg",
      title: "Getting Started with Azure DevOps Boards",
      issuer: "Coursera Project Network",
      link: "https://www.coursera.org/account/accomplishments/verify/PXGDYZ454QXQ",
      alt: "Azure DevOps Boards",
      bgColor: "bg-blue-100",
    },
    {
      image: "/PythonCert.jpg",
      title: "Python for Data Science and Machine Learning",
      issuer: "Udemy",
      link: "PythonCert.pdf",
      alt: "Python for Data Science",
      bgColor: "bg-purple-100",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? 0 : prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= certifications.length ? 0 : prev + 3
    );
  };

  return (
    <section id="education" className="bg-blue-50 py-10 px-4 sm:px-6">
      {/* ===== EDUCATION SECTION ===== */}
      <h2
        className="text-4xl font-extrabold text-blue-900 mb-8 text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Education
      </h2>

      <div
        className="max-w-6xl mx-auto rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white flex flex-col md:flex-row"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* Left: Image */}
        <div
          className="md:w-1/3 w-full h-64 md:h-auto"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src="/nedpic.jpg"
            alt="NED University"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Education Text */}
        <div
          className="md:w-2/3 w-full flex flex-col justify-center p-4 space-y-3"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h3 className="text-3xl font-bold text-blue-900">
            NED University of Engineering & Technology
          </h3>
          <p className="text-xl font-semibold italic">
            Bachelor's in Computer & Information System Engineering
          </p>
          <div className="flex flex-col items-end mt-3">
            <span className="text-base font-semibold text-blue-700 mb-2">
              2022 - 2026
            </span>
            <a
              href="https://drive.google.com/file/d/1noBjnLYkDwCi3DswtFPlPdr5yH_fzfsq/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition"
            >
              View Transcript
            </a>
          </div>
        </div>
      </div>

      {/* ===== CERTIFICATIONS SECTION ===== */}
      <h2
        className="text-4xl font-extrabold text-blue-900 mt-16 mb-8 text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications
            .slice(currentIndex, currentIndex + 3)
            .map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl active:-translate-y-2 group"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
              >
                <div
                  className={`w-full h-48 flex items-center justify-center ${cert.bgColor}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="h-full w-auto object-contain max-h-44"
                  />
                </div>
                <div className="bg-blue-50 p-4 text-center relative min-h-[150px]">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 break-words">
                    {cert.title}
                  </h3>
                  <p className="text-sm italic text-gray-700">{cert.issuer}</p>
                  <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 px-2 sm:px-0">
          <button
            onClick={handlePrev}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto mr-2 sm:mr-0"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto ml-2 sm:ml-0"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Education;
