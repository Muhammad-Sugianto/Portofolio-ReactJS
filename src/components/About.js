import React from "react";
import { motion } from "framer-motion";
import "../assets/About.css";
import profile from "../assets/img/abt.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-left">
          <motion.img
            className="about-profile-pic"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={profile}
            alt="Foto Profil"
          />
        </div>
        <div className="about-right">
          <motion.h1
            className="about-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>Nama: Muhammad Sugianto</p>
            <p>Umur: 19+ tahun</p>
            <p>TTL: Jember, 03 Desember 2004</p>
            <p>Sekolah: SMK Negeri 6 Jember</p>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default About;
