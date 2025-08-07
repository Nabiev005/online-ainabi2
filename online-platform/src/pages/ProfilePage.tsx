// src/pages/ProfilePage.tsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/ProfilePage.css";

const user = {
  name: "Айгерим Асанова",
  email: "aigerim@example.com",
  courses: [
    { title: "Front-end Developer", progress: 80, certificate: true },
    { title: "UX/UI Design", progress: 100, certificate: true },
  ],
};

const ProfilePage = () => { 
  return (
    <div className="modern-profile">
      <motion.div
        className="profile-card glass"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="avatar"></div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </motion.div>

      <motion.h3
        className="section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        📚 Менин курстарым
      </motion.h3>

      <div className="course-grid">
        {user.courses.map((course, index) => (
          <motion.div
            key={index}
            className="course-card neon-border"
            whileHover={{ scale: 1.03 }}
          >
            <h4>{course.title}</h4>
            <div className="progress-ring">
              <svg width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#eee"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#28a745"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={251}
                  strokeDashoffset={251 - (251 * course.progress) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <span className="progress-text">{course.progress}%</span>
            </div>

            {course.certificate && (
              <button className="neon-button">📄 Жүктөө</button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
