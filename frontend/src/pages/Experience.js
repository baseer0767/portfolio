import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Trainee Engineer",
      company: "TPL Trakker Ltd.",
      duration: "July 2025 – Present",
      description:
        "Contributing to AI/ML-based R&D projects focusing on real-time data processing and intelligent system behavior. Involved in end-to-end product testing, web platform quality assurance, and API integration validation. Developing web applications, and working on hardware-software integration for embedded systems and IoT-based solutions.",
    },
    {
      role: "R&D Intern",
      company: "TPL Trakker Ltd.",
      duration: "Mar 2025 – June 2025",
      description:
        "Researched emerging vehicle tracking technologies using telematics and IoT. Developed AI/ML solutions for real-time performance analysis and intelligent system behavior. Collaborated with engineers and worked on embedded systems using Arduino.",
    },
    {
      role: "AI/ML Intern",
      company: "NCBC (National Center of Big Data & Cloud Computing)",
      duration: "Feb 2025 – Mar 2025",
      description:
        "Processed large-scale image datasets and trained classification models using ResNet architecture. Applied supervised learning with TensorFlow and Keras.",
    },
    {
      role: "Python Developer Intern",
      company: "Codsoft",
      duration: "Dec 2023",
      description:
        "Solved Python-based challenges and delivered functional modules in a virtual internship setting. Gained experience in real-world coding and deadlines.",
    },
  ];

  return (
    <section id="experience" className="bg-blue-50 py-16 px-4 sm:px-6">
      {/* ===== Experience Intro Section ===== */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-6">
        {/* Image Left */}
        <div className="md:w-1/2 w-full" data-aos="fade-right">
          <img
            src="/experience.png"
            alt="Experience Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Right */}
        <div
          className="md:w-1/2 w-full text-center md:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 sm:mt-0 mt-4">
            Experience
          </h2>

          <h3 className="text-2xl font-semibold text-blue-800 mb-2">
            Work, Internship and Training
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            I've contributed to projects in AI/ML, embedded systems, and
            software development across multiple internships and R&D roles. My
            experiences span deep learning, IoT, and full-stack development,
            while actively engaging in real-world solutions and teamwork
            environments.
          </p>
        </div>
      </div>

      {/* ===== Experience Cards ===== */}
      <div className="max-w-6xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl p-6 shadow-md border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Duration in Top-Right (mobile-safe) */}
            <p className="absolute top-4 right-6 text-sm text-blue-600 italic text-right sm:text-left whitespace-nowrap">
              {exp.duration}
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 pr-16 break-words">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
