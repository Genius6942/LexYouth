import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import TeacherDashboard from "./routes/dashboard/teacher";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ThemeWrapper from "./ThemeWraper";


function App() {
  return (
    <ThemeWrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<div>404 - nothing to see here...</div>} />
        <Route path="dashboard" element={<Outlet />}>
          <Route path="teacher" element={<TeacherDashboard />}></Route>
        </Route>
      </Routes>
    </ThemeWrapper>
  );
}

export default App;
