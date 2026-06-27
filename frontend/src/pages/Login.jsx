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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
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
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          background: "#22c55e",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
          boxSizing: "border-box",
        }}
      >
        Login
      </button>

      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;