import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={createTheme()}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<div>404 - nothing to see here...</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
