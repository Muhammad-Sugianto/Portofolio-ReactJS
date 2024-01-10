import React from "react";
import "../assets/Contact.css";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

const icons = [
  { name: "whatsapp", url: "https://wa.me/085895968604", Icon: FaWhatsapp },
  { name: "email", url: "muhammadsugianto3839@gmail.com", Icon: FaEnvelope },
  {
    name: "github",
    url: "https://github.com/Muhammad-Sugianto",
    Icon: FaGithub,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/mhmdsgt04_",
    Icon: FaInstagram,
  },
];

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-card">
        {icons.map((icon) => (
          <motion.div
            key={icon.name}
            className={`contact-icon-card ${icon.name}`}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              title={`${icon.name} profil`}
              aria-label={`Kunjungi ${icon.name} profil`}
            >
              {icon.Icon && <icon.Icon size={32} />} {/* Ubah ukuran ikon */}
              <p>{icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
