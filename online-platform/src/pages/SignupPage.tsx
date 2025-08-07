import React from "react";
import ContactForm from "../components/ContactForm";

const SignupPage = () => {
  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Курска катталуу</h1>
      <ContactForm />
    </div>
  );
};

export default SignupPage;
