import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/home.js";
import { Login } from "./pages/login.js";
import { Welcome } from "./pages/welcome.js"
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
