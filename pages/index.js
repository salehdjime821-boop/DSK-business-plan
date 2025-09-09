import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("fr");

  const content = {
    fr: {
      title: "Bienvenue sur DSK Business Plan",
      subtitle: "Votre outil pour créer, gérer et présenter vos projets.",
      button: "Commencer",
    },
    en: {
      title: "Welcome to DSK Business Plan",
      subtitle: "Your tool to create, manage, and present your projects.",
      button: "Get Started",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {content[lang].title}
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        {content[lang].subtitle}
      </p>

      <button
        onClick={() => alert("🚀 Bientôt disponible !")}
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          background: "#0070f3",
          color: "#fff",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.background = "#eaeaea")}
        onMouseOut={(e) => (e.target.style.background = "#0070f3")}
      >
        {content[lang].button}
      </button>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setLang("fr")}
          style={{
            margin: "5px",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: lang === "fr" ? "#0070f3" : "#fff",
            color: lang === "fr" ? "#fff" : "#0070f3",
          }}
        >
          FR
        </button>
        <button
          onClick={() => setLang("en")}
          style={{
            margin: "5px",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: lang === "en" ? "#0070f3" : "#fff",
            color: lang === "en" ? "#fff" : "#0070f3",
          }}
        >
          EN
        </button>
      </div>
    </div>
  );
} 