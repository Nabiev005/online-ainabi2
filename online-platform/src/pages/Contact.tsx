import React, { useState } from 'react';
import '../styles/SignupForm.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      setError('Сырсөздөр дал келген жок!');
      return;
    }

    setError('');
    // Бул жерде backend'ке жиберүү болот
    alert('Катталдыңыз! 🎉');
  };

  return (
    <section className="signup-form-section">
      <h2>Катталуу формасы</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Атыңыз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Сырсөз"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Сырсөздү кайталаңыз"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Катталуу</button>
      </form>
    </section>
  );
};

export default Contact;
