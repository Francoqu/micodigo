import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterTeacher from "./pages/RegisterTeacher";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Página principal será Login */}
                <Route path="/" element={<Login />} />

                {/* Página de registro */}
                <Route path="/registro" element={<RegisterTeacher />} />

                {/* Página 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
