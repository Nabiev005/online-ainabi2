import React, { useState } from 'react';
import "../styles/Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Серверге жөнөтүү логикасы ушул жакка кошулат
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Катталуу</h2>
        <input
          type="text"
          name="name"
          placeholder="Атыңыз"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email дарек"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Сырсөз"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Каттал</button>
        <p>Аккаунтуңуз барбы? <a href="/login">Кирүү</a></p>
      </form>
    </div>
  );
};

export default Signup;
