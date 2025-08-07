import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Courses from "../components/Courses";
import Testimonials from '../components/Testimonials';
import SignupBanner from '../components/SignupBanner';
import SignupForm from '../components/SignupForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Courses />
      <Testimonials />
      <SignupBanner />
      {/* <SignupForm /> */}
    </>
  );
};

export default Home;
