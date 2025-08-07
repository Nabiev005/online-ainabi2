import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import "../styles/CertificatePage.css";
import Logo from "../assets/Logo.jpg";
// import Signature from "../assets/signature.png"; // <-- Колтамга сүрөтүн кош

const CertificatePage = () => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
    const input = certificateRef.current;
    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="certificate-container">
      <div className="certificate" ref={certificateRef}>
        <img src={Logo} alt="Platform Logo" className="logo" />
        <h1>СЕРТИФИКАТ</h1>
        <p className="subtitle">Бул сертификат</p>
        <h2 className="student-name">Айгерим Асанова</h2>
        <p className="description">аттуу студентке берилет</p>
        <p className="course-info">
          <strong>Front-end Developer</strong> курсун ийгиликтүү бүтүргөнү үчүн
        </p>

        <div className="certificate-footer">
          <div className="date">31-июль, 2025</div>
          <div className="signature-block">
            <img src='' alt="Директордун колтамгасы" className="signature" />
            <p>Директор</p>
            <p><strong>Набиев Айбек</strong></p>
          </div>
        </div>

        <p className="platform-footer">Ainabi платформасы | www.ainabi.kg</p>
      </div>

      <button onClick={generatePDF} className="download-btn">
        📥 Сертификатты жүктөп алуу
      </button>
    </div>
  );
};

export default CertificatePage;
