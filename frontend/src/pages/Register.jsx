import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await axios.post(
        "https://carbonfootprintai.onrender.com/api/accounts/register/",
        form
      );

      alert("✅ Registration Successful");

      navigate("/login");
    } catch (error) {
      alert("❌ Registration Failed");
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
        📝 Register
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
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
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
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          boxSizing: "border-box",
        }}
      >
        Register
      </button>

      <p style={{ marginTop: "20px" }}>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;