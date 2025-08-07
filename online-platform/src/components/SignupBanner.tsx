import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignupBanner.css';

const SignupBanner = () => {
  return (
    <section className="signup-banner">
      <h2>Катталып, бүгүн башта! 20 күн бекер!</h2>
      <div className="signup-buttons">
        <Link to="/signup" className="btn-outline">
               Катталып бүгүн башта
        </Link>
        <Link to="/free-course" className="btn-white">
              Бекер башта
        </Link>
      </div>
    </section>
  ); 
};

export default SignupBanner;
