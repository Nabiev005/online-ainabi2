import React from 'react';
import { Link } from 'react-router-dom';
import Aibek from "../assets/Aibek.jpg"
import Nazira from "../assets/nazira.jpg"
import Kanyshai from "../assets/kanyshai.jpg"
import Feruza from "../assets/feruza.jpg"
import "../styles/Courses.css"
import "../styles/CourseDetail.css"

type Course = {
  id: string;
  title: string;
  description: string;
  teacher: string;
  price: number;
  image: string;
};

const courses: Course[] = [
  {
    id: 'frontend-aibek',
    title: 'Front end Developer',
    description: 'JavaScript программалоо тили',
    teacher: 'Айбек Набиев',
    price: 100,
    image: Aibek,
  },
  {
    id: 'uxui-feruza',
    title: 'UX/UI',
    description: 'Мыкты дизайн',
    teacher: 'Феруза Кайратбекова',
    price: 100,
    image: Feruza,
  },
  {
    id: 'backend-nazira',
    title: 'Backend Developer',
    description: 'Python программалоо тилин үйрөн',
    teacher: 'Назира Акматова',
    price: 100,
    image: Nazira,
  },
  {
    id: 'frontend-kanyshai',
    title: 'Front end Developer',
    description: 'JavaScript программалоо тили',
    teacher: 'Нурматова Канышай',
    price: 100,
    image: Kanyshai,
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <h2>Курстар жана биздин Программистер</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-footer">
                <span>Окутуучу: {course.teacher}</span>
                <span className="price">${course.price}</span>
              </div>
              <Link to={`/courses/${course.id}`} className="more-info-btn">
                <button>Толук маалымат</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
