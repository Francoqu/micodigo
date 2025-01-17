import React from 'react';

const AutoTable = ({ autos, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año</th>
          <th>Color</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {autos.length > 0 ? (
          autos.map((auto) => (
            <tr key={auto.id}>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>{auto.año}</td>
              <td>{auto.color}</td>
              <td>{auto.precio}</td>
              <td>
                <button onClick={() => onEdit(auto)}>Editar</button>
                <button onClick={() => onDelete(auto.id)}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No hay autos registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AutoTable;
