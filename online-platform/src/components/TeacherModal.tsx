import React from "react";
import { teachers } from "../data/teachersData";
import "../styles/TeacherModal.css";

type Props = {
  teacherName: string;
  onClose: () => void;
};

const TeacherModal = ({ teacherName, onClose }: Props) => {
  const teacher = teachers.find(t => t.name === teacherName);
  if (!teacher) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={teacher.image} alt={teacher.name} />
        <h3>{teacher.name}</h3>
        <p>{teacher.bio}</p>
        <p><strong>Курстары:</strong> {teacher.courses.join(", ")}</p>
      </div>
    </div>
  );
};

export default TeacherModal;
