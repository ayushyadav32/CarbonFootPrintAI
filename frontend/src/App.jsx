import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import History from "./pages/History";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import AICoach from "./pages/AICoach";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const { token, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "600",
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 50px",
          background: "#020617",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h2 style={{ color: "#22c55e" }}>
          🌍 CarbonAI
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>

          {token && (
            <>
              <NavLink to="/dashboard" style={linkStyle}>
                Dashboard
              </NavLink>

              <NavLink to="/calculator" style={linkStyle}>
                Calculator
              </NavLink>

              <NavLink to="/aicoach" style={linkStyle}>
                AI Coach
              </NavLink>
              <NavLink style={linkStyle} to="/history">
  History
</NavLink>
            </>
            
          )}

          {!token ? (
            <>
              <NavLink to="/login" style={linkStyle}>
                Login
              </NavLink>

              <NavLink to="/register" style={linkStyle}>
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 18px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calculator"
          element={
            <ProtectedRoute>
              <Calculator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aicoach"
          element={
            <ProtectedRoute>
              <AICoach />
            </ProtectedRoute>
          }
        />
        <Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

        <Route
          path="/login"
          element={
            token ? <Navigate to="/" replace /> : <Login />
          }
        />

        <Route
          path="/register"
          element={
            token ? <Navigate to="/" replace /> : <Register />
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;