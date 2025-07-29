import React from "react";

function Education() {
  return (
    <section id="education" className="bg-blue-50 py-10 px-4">
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

      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* CARD 1 */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl active:-translate-y-2 group"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-full h-48 flex items-center justify-center bg-yellow-100">
            <img
              src="/Gen AI with LLM.jpg"
              alt="Generative AI"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="bg-blue-50 p-4 text-center relative">
            <h3 className="text-xl font-bold text-blue-900">
              Generative AI with Large Language Models
            </h3>
            <p className="text-sm italic text-gray-700">DeepLearning.AI & AWS</p>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="Gen AI with LLM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl active:-translate-y-2 group"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="w-full h-48 flex items-center justify-center bg-green-100">
            <img
              src="/Google.jpg"
              alt="Google Prompting Essentials"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="bg-blue-50 p-4 text-center relative">
            <h3 className="text-xl font-bold text-blue-900">
              Google Prompting Essentials for Artificial Intelligence
            </h3>
            <p className="text-sm italic text-gray-700">Google</p>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="Google Prompting Essentials.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl active:-translate-y-2 group"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="w-full h-48 flex items-center justify-center bg-blue-100">
            <img
              src="/Azure DevOps.jpg"
              alt="Azure DevOps Boards"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="bg-blue-50 p-4 text-center relative">
            <h3 className="text-xl font-bold text-blue-900">
              Getting Started with Azure DevOps Boards
            </h3>
            <p className="text-sm italic text-gray-700">Coursera Project Network</p>
            <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/PXGDYZ454QXQ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;  