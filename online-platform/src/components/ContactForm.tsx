import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import "./ContactForm.css"; // Стили өзүнчө жазсаң болот

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_1yjavo8",
        "template_4h4vpku",
        form.current,
        "HFaGmt-PO2hwLueE1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Кат ийгиликтүү жөнөтүлдү!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Жөнөтүүдө ката кетти!");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2>Катталып башта</h2>
      <input type="text" name="user_name" placeholder="Атыңыз" required />
      <input type="email" name="user_email" placeholder="Email дарегиңиз" required />
      <textarea name="message" placeholder="Кошумча маалымат (опциялык)" />
      <button type="submit">Жөнөтүү</button>
    </form>
  );
};

export default ContactForm;
