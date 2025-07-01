import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/home.js";
import { Login } from "./pages/login.js";
import { Welcome } from "./pages/welcome.js"
import { Parents } from "./pages/parents.js";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
        <Route path="/parents" element={<Parents/>}/>
      </Routes>
    </Router>
  );
}

export default App;
