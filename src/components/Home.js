import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../assets/Home.css";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const isMounted = useRef(true);

  useEffect(() => {
    const textToType = "Selamat Datang di Biodata Saya 📝";

    const animateText = async () => {
      while (isMounted.current) {
        for (let i = 0; i < textToType.length; i++) {
          if (!isMounted.current) break;
          setText(textToType.slice(0, i + 1));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));

        for (let i = textToType.length - 1; i > 0; i--) {
          if (!isMounted.current) break;
          setText(textToType.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    animateText();

    // Cleanup to prevent memory leaks
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      <motion.h1
        key="typing-text"
        className="biodata-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <motion.h1
            className="biodata-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Biodata{" "}
            <span role="img" aria-label="Biodata">
              📝
            </span>
          </motion.h1>
        </div>
        <div className="navbar-right">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#header">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about">About</a>
            </li>
            <li className="navbar-item">
              <a href="#education">Education</a>
            </li>
            <li className="navbar-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Biodata Container */}
      <div className="biodata-container">
        <div className="info">
          <TypingAnimation />
          <motion.p
            className="about-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontSize: "24px", color: "#fff" }}
          >
            Saya adalah siswa dari SMKN 6 Jember Jurusan Rekayasa Perangkat
            Lunak
          </motion.p>
        </div>
        <div className="profile-pic">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="profil.jpg"
            alt="Foto Profil"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
