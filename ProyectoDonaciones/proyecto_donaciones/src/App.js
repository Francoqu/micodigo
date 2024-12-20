import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Buscar from './components/Buscar';
import Donar from './components/Donar';
import RecaudarFondos from './components/RecaudarFondos';
import AcercaDe from './components/AcercaDe';
import IniciarSesion from './components/IniciarSesion';

const App = () => {
  return (
    <Router>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <img src="busqueda.png" alt="Buscar" className="icon" />
                <Link to="/buscar">Buscar</Link>
              </li>
              <li>
                <img src="donar.png" alt="Donar" className="icon" />
                <Link to="/donar">Donar</Link>
              </li>
              <li>
                <img src="recaudar.png" alt="Recaudar fondos" className="icon" />
                <Link to="/recaudar-fondos">Recaudar fondos</Link>
              </li>
              <li>
                <img src="acerca.png" alt="Acerca de" className="icon" />
                <Link to="/acerca-de">Acerca de</Link>
              </li>
              <li>
                <img src="iniciar.png" alt="Iniciar sesión" className="icon" />
                <Link to="/iniciar-sesion">Iniciar sesión</Link>
              </li>
            </ul>
          </nav>
          <button className="cta">
            <Link to="/recaudar-fondos">Iniciar una recaudación</Link>
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/recaudar-fondos" element={<RecaudarFondos />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        </Routes>
      </main>

      <footer>
        <p>2024 Madeleine Jimenez, Franco Quesada y Jhonder Triana.</p>
      </footer>
    </Router>
  );
};

export default App;
