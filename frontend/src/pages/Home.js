import React, { useState, useEffect } from "react";
import "../App.css";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { Element, scroller } from "react-scroll";

// Typing subtitles
const subtitles = [
  "Computer Information System Engineer",
  "Full-Stack Developer",
  "AI & Machine Learning Enthusiast",
  "IoT Architect & Embedded Solutions Designer",
];

function Home() {
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Auto-scroll to home on refresh
  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = subtitles[index];
    const updatedText = currentText.slice(0, charIndex);
    setTyped(updatedText);

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1200);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % subtitles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <Element name="home">
      <div>
        {/* Hero Section */}
        <div className="min-h-screen bg-blue-50 p-10 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1
              className="text-5xl font-bold text-blue-900"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              Hi There,
            </h1>
            <h1
              className="text-5xl font-bold text-blue-900"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              I am Abdul Baseer
            </h1>
            <h2
              className="text-2xl italic font-semibold text-blue-600"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              {typed}
              <span className="animate-pulse">|</span>
            </h2>

            <p
              className="text-gray-700 font-semibold max-w-xl text-lg"
              data-aos="fade-down"
              data-aos-delay="700"
              data-aos-duration="800"
            >
              I’m a tech enthusiast and developer with a strong foundation in AI/ML,
              embedded systems, and full-stack web development. Skilled in Python,
              C, JavaScript, and frameworks like Django and Node.js, I enjoy building
              efficient, scalable solutions that bridge hardware and software.
              With experience in tools like TensorFlow, OpenCV, and ESP32, I bring
              a detail-oriented, problem-solving mindset and a passion for continuous
              learning and innovation.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/baseer0767" target="_blank" rel="noreferrer">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/abdubaseer786" target="_blank" rel="noreferrer">
                <FaLinkedin size={28} />
              </a>
              <a href="https://www.instagram.com/baseer_0767?igsh=d255em1xb2lqaXBt" target="_blank" rel="noreferrer">
                <FaInstagram size={28} />
              </a>
              <a href="https://www.facebook.com/abdul.baseer.141123?sfnsn=scwspwa&mibextid=RUbZ1f" target="_blank" rel="noreferrer">
                <FaFacebook size={28} />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1VohD2jjdPCQAbHK9wzRCyt8a4iKLpjOC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              📄 See My Resume
            </a>
          </div>

          {/* Right Image */}
          <div
            className="flex-1 mt-10 md:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src="/image.png"
              alt="Developer at desk"
              className="w-3/4 max-w-md"
            />
          </div>
        </div>

        {/* Education Section */}
        <Element name="education">
          <div data-aos="fade-down" data-aos-delay="200">
            <Education />
          </div>
        </Element>

        {/* Experience Section */}
        <Element name="experience">
          <div data-aos="fade-down" data-aos-delay="400">
            <Experience />
          </div>
        </Element>

        {/* Projects Section */}
        <Element name="projects">
          <div data-aos="fade-down" data-aos-delay="600">
            <Projects />
          </div>
        </Element>

        {/* Contact Section */}
        <Element name="contact">
          <div data-aos="fade-down" data-aos-delay="800">
            <Contact />
          </div>
        </Element>
      </div>
    </Element>
  );
}

export default Home;
