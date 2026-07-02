import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://carbonfootprintai.onrender.com/api/login/",
        form
      );

      login(response.data.access);

      alert("✅ Login Successful");

      navigate("/");
    } catch (error) {
      alert("❌ Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        margin: "60px auto",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🔐 Login
      </h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          boxSizing: "border-box",
        }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          background: loading ? "#64748b" : "#22c55e",
          color: "white",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          borderRadius: "10px",
          boxSizing: "border-box",
          fontWeight: "bold",
        }}
      >
        {loading ? "⏳ Logging In..." : "🔐 Login"}
      </button>

      {loading && (
        <div
          style={{
            marginTop: "18px",
            background: "#0f172a",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            border: "1px solid #334155",
          }}
        >
          <p
            style={{
              color: "#facc15",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            ⏳ Connecting to server...
          </p>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "14px",
              marginTop: "8px",
              marginBottom: 0,
            }}
          >
            Please wait...
            <br />
            If the server is sleeping, it may take
            <br />
            <b>20–30 seconds</b> to wake up.
          </p>
        </div>
      )}

      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;