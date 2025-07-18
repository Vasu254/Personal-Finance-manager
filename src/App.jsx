import { useState } from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const handleSwitch = (target) => setPage(target);

  return (
    <div className="app-bg">
      <nav className="main-navbar">
        <div className="navbar-title">Finance Managing System</div>
      </nav>
      <div className="page-content">
        {page === "login" && <Login onSwitch={handleSwitch} />}
        {page === "register" && <Register onSwitch={handleSwitch} />}
      </div>
    </div>
  );
}

export default App;
