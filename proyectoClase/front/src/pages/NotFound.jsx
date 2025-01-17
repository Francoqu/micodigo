// Importar React y los componentes de Material-UI
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

import { Services } from '../services/service';
import configs from '../configs/env';
const RegisterTeacher = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Correo:', correo);
        const response = await Services({}, configs.routes.teacher.list);
        console.log("tenemos respuesta ", response);

    };

    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h4" gutterBottom>
                    Formulario de RegisterTeacher
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField
                        label="Correo Electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Enviar
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterTeacher;