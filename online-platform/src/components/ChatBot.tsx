import React, { useState } from 'react';
import "../styles/ChatBot.css"

type Message = {
  from: 'user' | 'bot';
  text: string;
};

const predefinedAnswers: { [question: string]: string } = {
  'Курстар канча турат?': 'Курстарыбыздын баасы 1000 сомдон башталат.',
  'Окуу канча убакытка созулат?': 'Ар бир курс 4 жумага созулат.',
  'Онлайнбы же офлайнбы?': 'Биздин бардык курстар онлайн түрүндө өтөт.',
  'Сертификат берилеби?': 'Ооба, курсту аяктаганда сертификат берилет.',
  'Кантип катталам?': 'Башкы беттеги катталуу формасы аркылуу каттала аласыз.',
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const reply = predefinedAnswers[input.trim()] || 'Кечиресиз, бул суроого жооп бере албай жатам.';
    const botMsg: Message = { from: 'bot', text: reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  const handleQuickQuestion = (question: string) => {
    const userMsg: Message = { from: 'user', text: question };
    const reply = predefinedAnswers[question] || 'Бул суроого азырынча жооп жок.';
    const botMsg: Message = { from: 'bot', text: reply };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header" onClick={handleToggle}>
        🤖 Чат Бот
      </div>

      {isOpen && (
        <div className="chatbot-body">
          {/* Даяр суроолор */}
          <div className="quick-questions">
            {Object.keys(predefinedAnswers).map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(question)}
                className="quick-question"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Сообщения */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.from === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Инпут */}
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Суроо жазыңыз..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Жибер</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
