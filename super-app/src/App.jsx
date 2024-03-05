import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
