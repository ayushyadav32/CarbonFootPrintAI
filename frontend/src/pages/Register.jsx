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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);

    try {
      await axios.post(
        "https://carbonfootprintai.onrender.com/api/accounts/register/",
        form
      );

      alert("✅ Registration Successful");
      navigate("/login");

    } catch (error) {
      console.log(error);

      if (error.response) {
        console.log(error.response.data);
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }

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
        📝 Register
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
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        disabled={loading}
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
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleRegister}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          background: loading ? "#64748b" : "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: loading ? "not-allowed" : "pointer",
          boxSizing: "border-box",
          fontWeight: "bold",
        }}
      >
        {loading ? "⏳ Creating Account..." : "📝 Register"}
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
           📝 Creating your account...<br></br>
            Please wait...
          </p>
        </div>
      )}

      <p style={{ marginTop: "20px" }}>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;