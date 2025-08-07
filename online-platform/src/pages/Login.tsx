import React, { useState } from 'react';
import "../styles/Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Серверге жөнөтүү логикасы ушул жакта болот
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Кирүү</h2>
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
        <button type="submit">Кир</button>
        <p>Аккаунтуңуз жокпу? <a href="/signup">Катталуу</a></p>
      </form>
    </div>
  );
};

export default Login;
