import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Page d'accueil
function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

                {/* 🚀 Nouveau bouton "À propos" */}
      <Link to="/about">
        <button className="custom-button">À propos du projet</button>
      </Link>

    </header>
  );
}

// Page à propos
function About() {
  return (
    <div className="App-header">
      <h2>À propos</h2>
      <p>
        Ce projet est une interface type J.A.R.V.I.S. (Iron Man) affichant l'heure,
        la température et une base de données SCP.
      </p>
     
                {/* 🔙 Bouton de retour vers la page d'accueil */}
     
      <Link to="/">
        <button className="custom-button">⬅ Retour à l'accueil</button>
      </Link>
      <Link to="/scp-data">
        <button className="scpdata-button">📚 Voir les données SCP</button>
      </Link>
    </div>
  );
}

function SCPData() {
  const [input, setInput] = React.useState("");
  const [scp, setScp] = React.useState(null);

  const SCP_DATABASE = {
    "173": {
      id: "scp-173",
      title: "SCP-173",
      summary: "Une statue animée très dangereuse...",
      object_class: "Euclide",
      url: "http://www.scpwiki.com/scp-173"
    },
    "049": {
      id: "scp-049",
      title: "SCP-049",
      summary: "Le médecin peste qui croit que la peste est une maladie mentale.",
      object_class: "Euclide",
      url: "http://www.scpwiki.com/scp-049"
    }
  };

  const handleSearch = () => {
    const found = SCP_DATABASE[input];
    if (found) {
      setScp(found);
    } else {
      setScp(null);
      alert("SCP non trouvé !");
    }
  };

  return (
    <div className="App-header">
      <h2>Données SCP</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Entrez un numéro (ex: 173)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", fontSize: "1rem" }}
        />
        <button className="custom-button" onClick={handleSearch}>
          Rechercher
        </button>
      </div>

                  {/* 🔽 Bouton retour dans une div à part */}
      <div>
        <Link to="/">
          <button className="custom-button">⬅ Retour à l'accueil</button>
        </Link>
      </div>

      {scp && (
        <div>
          <h3>{scp.title}</h3>
          <p><strong>Classe :</strong> {scp.object_class}</p>
          <p>{scp.summary}</p>
          <a href={scp.url} target="_blank" rel="noreferrer">Lire l'article complet</a>
        </div>
      )}
    </div>
  );
}

// Composant principal avec les routes

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scp-data" element={<SCPData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;