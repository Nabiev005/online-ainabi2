import Aibek from "../assets/Aibek.jpg";
import Nazira from "../assets/nazira.jpg";
import Feruza from "../assets/feruza.jpg";


export type Teacher = {
  id: string;
  name: string;
  bio: string;
  image: string;
  courses: string[];
  email?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
};

export const teachers: Teacher[] = [
  {
    id: "aibek",
    name: "Айбек Набиев",
    bio: "2 жылдык фронт-энд тажрыйбасы бар. React, Vue жана TypeScript менен иштейт.",
    image: Aibek,
    courses: ["Front end Developer"],
    email: "ajbeknabiev90@gmail.com",
    whatsapp: "+99670295220",
    instagram: "https://instagram.com/aibek__dev",
    facebook: "https://facebook.com/aibek.nabiev"
  },
  {
    id: "nazira",
    name: "Назира Акматова",
    bio: "Python жана Django боюнча тажрыйбалуу окутуучу.",
    image: Nazira,
    courses: ["Backend Developer"],
    email: "akmatova1804@gmail.com",
    whatsapp: "+996990686854",
    instagram: "https://instagram.com/akmatova._.n",
    facebook: "https://facebook.com/nazira.akmatova"
  },
  {
    id: "feruza",
    name: "Феруза Кайратбекова",
    bio: "UX/UI дизайн боюнча адис. Figma жана Adobe XD программаларын мыкты билет.",
    image: Feruza,
    courses: ["UX/UI"],
    email: "feruza@example.com",
    whatsapp: "+996704444998",
    instagram: "https://instagram.com/f27_kai",
    facebook: "https://facebook.com/feruza.kairat"
  },
];
