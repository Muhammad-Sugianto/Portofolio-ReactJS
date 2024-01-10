import React from "react";
import "../assets/Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-card">
        <h3>SMK NEGERI 6 JEMBER</h3>
        <p>TH | 2020-2024</p>
        <p>Lokasi : Tanggul</p>
      </div>
      <div className="education-card">
        <h3>SMP NEGERI 2 TANGGUL</h3>
        <p>TH | 2017-2020</p>
        <p>Lokasi : TANGGUL</p>
      </div>
      <div className="education-card">
        <h3>SDN KLATAKAN 02</h3>
        <p>TH | 2011-2017</p>
        <p>Lokasi : Klatakan</p>
      </div>
      <div className="education-card">
        <h3>TK Rodotul Ulum</h3>
        <p>TH | 2008-2011</p>
        <p>Lokasi : Surabaya </p>
      </div>

      <div className="education-card">
        <h3>Magang</h3>
        <p>UNIVERSITAS MUHAMMADIYAH JEMBER</p>
        <p>CV | 4 BULAN</p>
        <p>Lokasi : Jember</p>
      </div>
    </div>
  );
};

export default Education;
