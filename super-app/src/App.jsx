import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Browse from "./pages/Browse";
import Homepage from "./pages/Homepage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {user}= useContext(AuthContext);
  return (
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/browse" element={user?<Browse />:<Register/>}></Route>
        <Route path="/" element={user?(user.preference?<Homepage />:<Movies/>):<Register/>}></Route>
        <Route path="/movie" element={user?<Movies />:<Register />}></Route>
      </Routes>
  );
}

export default App;
