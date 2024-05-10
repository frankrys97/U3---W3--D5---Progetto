import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import YourLibrary from "./components/YourLibrary.jsx";
import SerchedSong from "./components/SearchSongs.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/yourlibrary" element={<YourLibrary />}></Route>
        <Route path="/search" element={<SerchedSong />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
