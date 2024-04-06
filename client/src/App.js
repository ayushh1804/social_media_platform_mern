import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "./scenes/homePage"
import LoginPage from "./scenes/loginPage"
import Navbar from "./scenes/navbar"
import ProfilePage from "./scenes/profilePage"




function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
