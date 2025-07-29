import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-20 px-4 sm:px-6">
      <div
        className="max-w-3xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
          Have a project in mind, a question, or just want to say hi? <br />
          I'm always open to connecting and collaborating.
        </p>

        {/* Email Button */}
        <a
          href="mailto:sheikhabdulbaseer786@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-base sm:text-lg font-medium px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          📧 Email Me
        </a>

        {/* Phone Number */}
        <div className="mt-6 text-blue-800 text-base sm:text-lg font-medium">
          📞 +92 323‑2030337
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-800 text-2xl">
          <a
            href="https://github.com/baseer0767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdubaseer786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sheikhabdulbaseer786@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+923232030337"
            className="hover:text-blue-600 transition"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Abdul Baseer. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;
