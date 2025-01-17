import React, { useState, useEffect } from 'react';

const AutoForm = ({ onSubmit, autoToEdit }) => {
  const [auto, setAuto] = useState({
    marca: '',
    modelo: '',
    año: '',
    color: '',
    precio: ''
  });

  useEffect(() => {
    if (autoToEdit) {
      setAuto(autoToEdit); // Rellenar el formulario con los datos del auto a editar
    }
  }, [autoToEdit]);

  const handleChange = (e) => {
    setAuto({ ...auto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(auto); // Llamar a la función onSubmit para registrar o actualizar
    setAuto({
      marca: '',
      modelo: '',
      año: '',
      color: '',
      precio: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="marca"
        value={auto.marca}
        onChange={handleChange}
        placeholder="Marca"
        required
      />
      <input
        type="text"
        name="modelo"
        value={auto.modelo}
        onChange={handleChange}
        placeholder="Modelo"
        required
      />
      <input
        type="number"
        name="año"
        value={auto.año}
        onChange={handleChange}
        placeholder="Año"
        required
      />
      <input
        type="text"
        name="color"
        value={auto.color}
        onChange={handleChange}
        placeholder="Color"
        required
      />
      <input
        type="number"
        name="precio"
        value={auto.precio}
        onChange={handleChange}
        placeholder="Precio"
        required
      />
      <button type="submit">{autoToEdit ? 'Actualizar Auto' : 'Registrar Auto'}</button>
    </form>
  );
};

export default AutoForm;
