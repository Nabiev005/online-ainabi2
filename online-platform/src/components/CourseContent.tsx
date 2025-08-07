import React from "react";

type Props = {
  content: string[];
};

const CourseContent = ({ content }: Props) => {
  return (
    <div className="course-content">
      <h3>📚 Курс мазмуну</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseContent;
