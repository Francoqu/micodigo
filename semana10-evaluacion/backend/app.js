
// App.js
import React, { useState } from 'react';
import AutoForm from './components/AutoForm';
import AutoTable from './components/AutoTable';
import axios from 'axios';

const App = () => {
  const [selectedAuto, setSelectedAuto] = useState(null);

  const handleSubmit = (auto) => {
    if (selectedAuto) {
      axios.put(`http://localhost:5000/api/autos/${selectedAuto._id}`, auto)
        .then(() => setSelectedAuto(null))
        .catch(err => console.error(err));
    } else {
      axios.post('http://localhost:5000/api/autos', auto)
        .catch(err => console.error(err));
    }
  };

  const handleEdit = (auto) => {
    setSelectedAuto(auto);
  };

  return (
    <div>
      <AutoForm onSubmit={handleSubmit} />
      <AutoTable onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
