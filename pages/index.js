.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #00c6ff, #0070f3);
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 20px;
}

/* ==== LOGO ==== */
.logo {
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

.logoDSK {
  font-weight: bold;
  color: #ffdd00; /* Couleur dorée */
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

.logoText {
  margin-left: 8px;
  font-weight: 600;
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
}

/* ==== CONTENU ==== */
h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.mainButton {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background: #004080;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mainButton:hover {
  background: #0066cc;
}

/* ==== LANG SWITCHER ==== */
.langSwitcher {
  margin-top: 20px;
}

.langSwitcher button {
  margin: 5px;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #fff;
  color: #0070f3;
  font-weight: bold;
}

.langSwitcher .active {
  background: #0070f3;
  color: #fff;
}