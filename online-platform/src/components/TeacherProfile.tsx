import React from "react";
import { teachers } from "../data/teachersData";
import "../styles/TeacherProfile.css";

type Props = {
  teacherName: string;
};

const TeacherProfile = ({ teacherName }: Props) => {
  const teacher = teachers.find(t => t.name === teacherName);

  if (!teacher) return <p>Мугалим табылган жок.</p>;

  return (
      <div className="teacher-card">
    <div className="teacher-left">
      <img src={teacher.image} alt={teacher.name} className="teacher-photo" />
    </div>

    <div className="teacher-right">
      <h2 className="section-heading">👨‍🏫 Мугалим жөнүндө</h2>
      <h3 className="teacher-name">{teacher.name}</h3>
      <p className="teacher-bio">{teacher.bio}</p>

      <div className="teacher-details">
        <p><span>📚 Курстары:</span> {teacher.courses.join(", ")}</p>
        {teacher.email && <p><span>📩 Email:</span> {teacher.email}</p>}
        {teacher.whatsapp && (
          <p><span>📱 WhatsApp:</span> <a href={`https://wa.me/${teacher.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer">{teacher.whatsapp}</a></p>
        )}
        {teacher.instagram && (
          <p><span>📷 Instagram:</span> <a href={teacher.instagram} target="_blank" rel="noopener noreferrer">Профили</a></p>
        )}
        {teacher.facebook && (
          <p><span>📘 Facebook:</span> <a href={teacher.facebook} target="_blank" rel="noopener noreferrer">Профили</a></p>
        )}
      </div>
    </div>
  </div>
  );
};

export default TeacherProfile;
