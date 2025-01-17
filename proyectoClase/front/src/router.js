import React from "react";

import { Routes, Route } from "react-router-dom";

//FILE-PAGES
import RegisterTeacherPage from "./pages/RegisterTeacher";
//

import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/registroProfesor" element={<RegisterTeacherPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;