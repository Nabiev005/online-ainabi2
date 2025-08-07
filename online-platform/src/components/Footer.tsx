import React from 'react';
import '../styles/Footer.css';
import ChatBot from './ChatBot';

const Footer = () => {
  return (
    <footer className="footer">
      <ChatBot/>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ainabi платформасы</h3>
          <p>Биз заманбап билим берүү платформасын сунуштайбыз.</p>
        </div>

        <div className="footer-section">
          <h4>Бөлүмдөр</h4>
          <ul>
            <li><a href="/">Башкы бет</a></li>
            <li><a href="/courses">Курстар</a></li>
            <li><a href="/about">Биз жөнүндө</a></li>
            <li><a href="/contact">Байланыш</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Байланыш</h4>
          <p>Email: info@ainabi.kg</p>
          <p>Тел: +996 702 95 22 00</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ainabi. Бардык укуктар корголгон.
      </div>
    </footer>
  );
};

export default Footer;
