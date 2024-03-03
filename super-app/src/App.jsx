import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Display from "./pages/Display";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/display" element={<Display />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
