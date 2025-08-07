import Aibek from "../assets/Aibek.jpg";
import Feruza from "../assets/feruza.jpg";
import Nazira from "../assets/nazira.jpg";
import Kanyshai from "../assets/kanyshai.jpg";

export type Course = {
  id: string;
  title: string;
  description: string;
  teacher: string;
  price: number;
  image: string;
  schedule: { day: string; topic: string }[]; // ← Жаңы кошулган талаа
};

export const courses: Course[] = [
  {
    id: "frontend",
    title: "Front end Developer",
    description: "JavaScript программалоо тили",
    teacher: "Айбек Набиев",
    price: 100,
    image: Aibek,
    schedule: [
      { day: "1-күн", topic: "HTML & CSS негиздери" },
      { day: "2-күн", topic: "Flexbox & Grid" },
      { day: "3-күн", topic: "JavaScript Basics" },
      { day: "4-күн", topic: "DOM & Events" },
      { day: "5-күн", topic: "React.js Introduction" },
      { day: "6-күн", topic: "React Components" },
      { day: "7-күн", topic: "Проект иштеп чыгуу" },
    ],
  },
  {
    id: "uiux",
    title: "UX/UI",
    description: "Мыкты дизайн",
    teacher: "Феруза Кайратбекова",
    price: 100,
    image: Feruza,
    schedule: [
      { day: "1-күн", topic: "Figma менен таанышуу" },
      { day: "2-күн", topic: "Wireframe" },
      { day: "3-күн", topic: "UI Components" },
      { day: "4-күн", topic: "User Flow" },
    ],
  },
  // Башка курстарды дагы ушул форматта толтурса болот
];
