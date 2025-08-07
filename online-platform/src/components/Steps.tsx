import React from 'react';
import "../styles/Steps.css"

const Steps = () => {
  const steps = [
    { number: 1, text: 'Каттоо эсебин түз' },
    { number: 2, text: 'Курстарды тап' },
    { number: 3, text: 'Орунду ээлө' },
    { number: 4, text: 'Башта' },
  ];

  return (
    <section className="steps">
      <h2>4 Жөнөкөй кадам менен башта</h2>
      <p className="steps-subtitle">
        Онлайн билим алуу азыр өтө жеңил. Төмөнкү кадамдарды аткар да, билимиңди башта!
      </p>
      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div className="step-text">{step.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
