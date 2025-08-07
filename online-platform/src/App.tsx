import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CoursesPage from './components/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';
// import ChatBotPage from './pages/ChatBotPage'; 
import Signup from './pages/Signup';
import Login from './pages/Login';
import FreeCourse from './pages/FreeCourse';

import ProfilePage from './pages/ProfilePage';
import ChatBot from './components/ChatBot';
import SignupPage from "./pages/SignupPage";
import CertificatePage from './components/CertificatePage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Негизги маршруттар */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/chatbot" element={<ChatBotPage />} /> */}
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/free-course" element={<FreeCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/certificate" element={<CertificatePage />} /> */}
        <Route path="/profile" element={<ProfilePage />} /> {/* ЖАҢЫ */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
