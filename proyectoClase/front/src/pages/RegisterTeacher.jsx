import { useState, useEffect } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import configs from "../configs/env";
import Services from "../services/service";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const RegisterTeacher = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (Cookie.get("username")) {
            navigate("/dashboard"); // Redirige si ya está logeado
        }
    }, [navigate]);

    const register = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await Services({ username, password }, configs.routes.initial.registerTeacher);

            if (response.status) {
                Cookie.set("username", username, { expires: 1 }); // Guarda usuario en cookie
                navigate("/dashboard"); // Redirige al Dashboard
            } else {
                setError(response?.message || "Error al registrar");
            }
        } catch (error) {
            setError("Ocurrió un error al intentar registrarse. Intente nuevamente.");
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Typography variant="h4">Registro de Docente</Typography>

            {error && <Typography color="error">{error}</Typography>}

            <form onSubmit={register} style={{ width: "300px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <TextField label="Usuario" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} required />
                <TextField label="Contraseña" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Button type="submit" variant="contained" color="primary" fullWidth>Registrar</Button>
            </form>
        </Box>
    );
};

export default RegisterTeacher;



