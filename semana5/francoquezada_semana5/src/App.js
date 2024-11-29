import React, { useState } from 'react';
import InputEstudiante from './components/InputEstudiante';
import Button from './components/Button';
import ButtonVerEstudiantes from './components/ButtonVerEstudiantes';
import TablaEstudiantes from './components/TablaEstudiantes';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [verLista, setVerLista] = useState(false); 


  const addEstudiante = () => {
    if (nombreCompleto.trim() !== '' && cedula.trim() !== '' && telefono.trim() !== '' && correo.trim() !== '') {
      setEstudiantes([
        ...estudiantes,
        { nombreCompleto, cedula, telefono, correo },
      ]);
      setNombreCompleto('');
      setCedula('');
      setTelefono('');
      setCorreo('');
    }
  };

  const toggleLista = () => {
    setVerLista(!verLista);
  };

  return (
    <div className="container">
      <h1>Registro de Estudiantes</h1>
      
        <InputEstudiante
          nombreCompleto={nombreCompleto}
          setNombreCompleto={setNombreCompleto}
          cedula={cedula}
          setCedula={setCedula}
          telefono={telefono}
          setTelefono={setTelefono}
          correo={correo}
          setCorreo={setCorreo}
        />
        <Button onClick={addEstudiante} />
      

      <ButtonVerEstudiantes onClick={toggleLista} />

      {verLista && <TablaEstudiantes estudiantes={estudiantes} />}
    </div>
  );
};

export default App;
