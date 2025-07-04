import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={`accordion text-center mx-auto ${styles.accordionContainer}`} id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button text-center ${styles.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <span style={{ margin: '0 auto' }}>🐉</span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className={`card ${styles.footer}`}>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p className={styles.footHead}>Nishab</p>
                  <footer className={`blockquote-footer ${styles.developerInfo}`}>
                    •Student of ICT•
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
