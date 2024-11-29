import React from 'react';

const InputEstudiante = ({
  nombreCompleto,
  setNombreCompleto,
  cedula,
  setCedula,
  telefono,
  setTelefono,
  correo,
  setCorreo,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="nombreCompleto">Nombre Completo:</label>
        <input
          type="text"
          id="nombreCompleto"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cedula">Cedula:</label>
        <input
          type="text"
          id="cedula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="telefono">Telefono:</label>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="correo">Correo :</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputEstudiante;
