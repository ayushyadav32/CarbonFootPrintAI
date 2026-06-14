import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import AICoach from "./pages/AICoach";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          background: "#111827",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/aicoach">AI Coach</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/aicoach" element={<AICoach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;