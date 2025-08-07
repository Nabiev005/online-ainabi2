import React from 'react';
import Student1 from "../assets/student1.jpg"
import Student2 from "../assets/student2.jpg"
import Student3 from "../assets/student3.jpg"
import '../styles/Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Желия Матус',
      role: 'Продукт Дизайнер, Google',
      text: 'Бул платформа билим алуу үчүн эң ыңгайлуу. Материалдар түшүнүктүү жана жонокой түшүндүрүлгөн.',
      image: Student1,
    },
    {
      name: 'Адам Каутхе',
      role: 'Инженер, Google',
      text: 'Мен онлайн курстардан көп пайдалуу нерсе үйрөндүм. Окутуучулар абдан кесипкөй.',
      image: Student2,
    },
    {
      name: 'Молука Камил',
      role: 'Бизнес-консультант',
      text: 'Өзүмө керектүү билимин ушул жерден таптым. Курс мазмуну да, сапаты да жогору.',
      image: Student3,
    },
  ];

  return (
    <section className="testimonials">
      <h2>Студенттер эмне дешет?</h2>
      <div className="testimonial-grid">
        {reviews.map((review, idx) => (
          <div className="testimonial-card" key={idx}>
            <img src={review.image} alt={review.name} />
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">{review.name}</p>
            <p className="review-role">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
