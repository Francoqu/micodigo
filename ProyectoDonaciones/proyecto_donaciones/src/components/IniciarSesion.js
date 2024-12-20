import React from 'react';

const IniciarSesion = () => {
  return (
    <div className="hero">
      <h1 className="login-title">Iniciar Sesión</h1>
      <p className="login-subtitle">Accede con tus credenciales o regístrate para empezar a donar.</p>
      <form className="login-form">
        <input type="text" placeholder="Nombre de usuario" className="login-input" />
        <input type="password" placeholder="Contraseña" className="login-input" />
        <button type="submit" className="cta">Iniciar Sesión</button>
      </form>
      <div className="register-link">
        <p>¿No tienes cuenta? <a href="#" className="register-link-text">Regístrate</a></p>
      </div>
    </div>
  );
};

export default IniciarSesion;
