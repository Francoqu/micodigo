import React from 'react';

const TablaEstudiantes = ({ estudiantes }) => {
  return (
    <div >
      <h2>Lista de Estudiantes</h2>
      <table border="1" cellPadding="3">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Cédula</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr key={index}>
              <td>{estudiante.nombreCompleto}</td>
              <td>{estudiante.cedula}</td>
              <td>{estudiante.telefono}</td>
              <td>{estudiante.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEstudiantes;
