import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={`card ${styles.footer}`}>
      <div className="card-header"> 🐉 </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className={`${styles.footHead}`}>Nishab</p>
          <footer className="blockquote-footer">
            Student of ICT
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Footer;
