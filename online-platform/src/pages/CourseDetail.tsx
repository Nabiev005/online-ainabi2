import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TeacherProfile from "../components/TeacherProfile";
import Aibek from "../assets/Aibek.jpg";
import Nazira from "../assets/nazira.jpg";
import Feruza from "../assets/feruza.jpg";
import Kanyshai from "../assets/kanyshai.jpg";
import Rating from '../components/Rating';
import CourseContent from "../components/CourseContent";
import "../styles/CourseDetail.css"; // Жаңы стили кош

type Course = {
  id: string;
  title: string;
  description: string;
  teacher: string;
  price: number;
  image: string;
  content: string[];
};

const courses: Course[] = [
  {
    id: 'frontend-aibek',
    title: 'Front end Developer',
    description: 'JavaScript программалоо тилин терең үйрөнүү.',
    teacher: 'Айбек Набиев',
    price: 100,
    image: Aibek,
      content: [
    "HTML негиздери",
    "CSS менен иштөө",
    "JavaScript негиздери",
    "React компоненти жана props",
    "State жана effect hooks",
    "Жыйынтык проект",
  ],
  },
  {
    id: 'uxui-feruza',
    title: 'UX/UI',
    description: 'Дизайн ойлонуп, колдонуучунун тажрыйбасын өнүктүрүү.',
    teacher: 'Феруза Кайратбекова',
    price: 100,
    image: Feruza,
      content: [
    "figma менен иштоо",
    "PhotoShop менен иштоо",
    "Практика веб сайттар менен",
    "Экзамен"
  ],
  },
  {
    id: 'backend-nazira',
    title: 'Backend Developer',
    description: 'Python менен сервер түзүүнү үйрөн.',
    teacher: 'Назира Акматова',
    price: 100,
    image: Nazira,
      content: [
    "Python негиздери",
    "Тип данных",
    "Негизги темалар"
  ],
  },
  {
    id: 'frontend-kanyshai',
    title: 'Front end Developer',
    description: 'HTML, CSS, JavaScript толук курсу.',
    teacher: 'Нурматова Канышай',
    price: 100,
    image: Kanyshai,
          content: [
    "HTML негиздери",
    "CSS менен иштөө",
    "JavaScript негиздери",
    "React компоненти жана props",
    "State жана effect hooks",
    "Жыйынтык проект",
  ],
  },
];

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div>Курс табылган жок.</div>;
  }

  return (
    <div className="course-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Артка кайтуу
      </button>

      <div className="course-detail-card">
        <div className="course-image">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-info">
          <h2>{course.title}</h2>
          <p><strong>Окутуучу:</strong> {course.teacher}</p>
          <p><strong>Баасы:</strong> ${course.price}</p>
          <p>{course.description}</p>
          <Rating />
          <CourseContent content={course.content} />
        </div>
      </div>

      <div className="teacher-section">
        <h3>Мугалим жөнүндө</h3>
        <TeacherProfile teacherName={course.teacher} />
      </div>
    </div>
  );
};

export default CourseDetails;
