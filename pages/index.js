import { useState } from "react";
import styles from "../styles/Home.module.css";

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
    <div className={styles.container}>
      {/* LOGO */}
      <header className={styles.logo}>
        <span className={styles.logoDSK}>DSK</span>
        <span className={styles.logoText}> Business Plan</span>
      </header>

      {/* CONTENU */}
      <h1>{content[lang].title}</h1>
      <p className={styles.subtitle}>{content[lang].subtitle}</p>

      <button
        className={styles.mainButton}
        onClick={() => alert("🚀 Bientôt disponible !")}
      >
        {content[lang].button}
      </button>

      {/* LANG SWITCHER */}
      <div className={styles.langSwitcher}>
        <button
          className={lang === "fr" ? styles.active : ""}
          onClick={() => setLang("fr")}
        >
          FR
        </button>
        <button
          className={lang === "en" ? styles.active : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}