import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FreeCourse.css';

const FreeCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="free-course-container">
      <h1>Бекер Frontend Курс</h1>
      <p>Бул бөлүмдө сиз HTML, CSS, жана JavaScript боюнча негизги билимдерди аласыз.</p>

      <div className="video-container">
        <video controls>
          <source src="/videos/frontend-intro.mp4" type="video/mp4" />
          Сиздин браузер видеону колдобойт.
        </video>
      </div>

      <div className="course-info">
        <h2>Эмне үйрөнөсүз?</h2>
        <ul>
          <li>HTML структурасы</li>
          <li>CSS менен стилдөө</li>
          <li>JavaScript негиздери</li>
        </ul>
      </div>

      {/* Артка кайтуу кнопкасы */}
      <button onClick={() => navigate(-1)} className="back-button">
        ← Артка кайтуу
      </button>
    </div>
  );
};

export default FreeCourse;
