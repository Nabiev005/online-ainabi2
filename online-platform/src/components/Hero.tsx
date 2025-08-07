import React from 'react';
import "../styles/Hero.css"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Каалаган убакта, каалаган жерде<br />Билимиңди онлайн өнүктүр!</h1>
        <p>
          Онлайн билим берүү — бул интернет аркылуу үйдөн туруп билим алуу.
          Өз алдынча окугусу келгендер үчүн эң ылайыктуу.
        </p>
        
        <div className="hero-buttons">
          <Link to="/courses" className="btn-green">
                Баардык курстар
          </Link>
          <button className="btn-outline">Видеону көрүү</button>
        </div>
      </div>
      <div className="hero-image">
        {/* <img src="/your-image.png" alt="Student" /> */}
      </div>
    </section>
  );
};

export default Hero;
