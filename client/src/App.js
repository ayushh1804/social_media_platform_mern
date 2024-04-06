import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "./scenes/homePage"
import LoginPage from "./scenes/loginPage"
import Navbar from "./scenes/navbar"
import ProfilePage from "./scenes/profilePage"
import { useMemo } from "react";
import { useSelector } from "react-redux"
import { cssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme";


function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (

    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <cssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
