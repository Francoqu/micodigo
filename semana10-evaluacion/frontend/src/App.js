import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AutoForm from './components/AutoForm';
import AutoTable from './components/AutoTable';

const App = () => {
  const [autos, setAutos] = useState([]);
  const [autoToEdit, setAutoToEdit] = useState(null);

  const getAutos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/autos');
      setAutos(response.data);
    } catch (error) {
      console.error('Error al obtener los autos:', error);
    }
  };

  useEffect(() => {
    getAutos();
  }, []);

  const handleSubmit = async (auto) => {
    if (autoToEdit) {
      try {
        await axios.put(`http://localhost:5000/api/autos/${autoToEdit.id}`, auto);
        setAutoToEdit(null);
        getAutos(); // Volver a obtener la lista de autos después de actualizar
      } catch (error) {
        console.error('Error al actualizar el auto:', error);
      }
    } else {
      try {
        await axios.post('http://localhost:5000/api/autos', auto);
        getAutos(); // Volver a obtener la lista de autos después de registrar
      } catch (error) {
        console.error('Error al registrar el auto:', error);
      }
    }
  };

  const handleEdit = (auto) => {
    setAutoToEdit(auto); // Establecer el auto para editar
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/autos/${id}`);
      getAutos(); // Volver a obtener la lista de autos después de eliminar
    } catch (error) {
      console.error('Error al eliminar el auto:', error);
    }
  };

  return (
    <div>
      <h1>Registro de Autos</h1>
      <AutoForm onSubmit={handleSubmit} autoToEdit={autoToEdit} />
      <h2>Tabla de Autos</h2>
      <AutoTable autos={autos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
