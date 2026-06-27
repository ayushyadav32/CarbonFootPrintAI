import { useState } from "react";
import axios from "axios";

function Calculator() {
  const [travel, setTravel] = useState("");
  const [electricity, setElectricity] = useState("");
  const [diet, setDiet] = useState("Vegetarian");
  const [waste, setWaste] = useState("");
  const [water, setWater] = useState("");

  const [result, setResult] = useState(null);

  const calculateCarbon = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://carbonfootprintai.onrender.com/api/calculate/",
        {
          travel,
          electricity,
          diet,
          waste,
          water,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(response.data.carbon_score);

      alert("✅ Record Saved Successfully");

      setTravel("");
      setElectricity("");
      setWaste("");
      setWater("");
      setDiet("Vegetarian");

    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        alert("Please login first.");
      } else {
        alert("Something went wrong.");
      }
    }
  };

  return (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      padding: "20px",
      color: "white",
      boxSizing: "border-box",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        fontSize: "clamp(2rem,6vw,52px)",
        marginBottom: "10px",
      }}
    >
      🧮 Carbon Calculator
    </h1>

    <p
      style={{
        textAlign: "center",
        color: "#94a3b8",
        marginBottom: "40px",
        fontSize: "clamp(15px,3vw,18px)",
      }}
    >
      Calculate your monthly carbon footprint and track your environmental impact.
    </p>

    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        width: "100%",
        boxSizing: "border-box",
        margin: "0 auto",
        background: "#1e293b",
        padding: "35px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >

        <input
  type="number"
  placeholder="🚗 Travel Distance (km/month)"
  value={travel}
  onChange={(e) => setTravel(e.target.value)}
  style={{
    width: "100%",
    padding: "18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #334155",
  }}
/>

<input
  type="number"
  placeholder="⚡ Electricity Usage (kWh/month)"
  value={electricity}
  onChange={(e) => setElectricity(e.target.value)}
  style={{
    width: "100%",
    padding: "18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #334155",
  }}
/>

<select
  value={diet}
  onChange={(e) => setDiet(e.target.value)}
  style={{
    width: "100%",
    padding: "18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #334155",
  }}
>
  <option>Vegetarian</option>
  <option>Mixed</option>
  <option>Non-Vegetarian</option>
</select>

<input
  type="number"
  placeholder="🗑️ Waste Generated (kg/week)"
  value={waste}
  onChange={(e) => setWaste(e.target.value)}
  style={{
    width: "100%",
    padding: "18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #334155",
  }}
/>

<input
  type="number"
  placeholder="🚰 Water Usage (Liters/day)"
  value={water}
  onChange={(e) => setWater(e.target.value)}
  style={{
    width: "100%",
    padding: "18px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #334155",
  }}
/>

<button
  onClick={calculateCarbon}
  style={{
    width: "100%",
    padding: "18px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
  }}
>
  Calculate Carbon Footprint
</button>
      </div>

      {result !== null && (
        <div
          style={{
            maxWidth: "900px",
            margin: "30px auto",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#22c55e",
              marginBottom: "10px",
            }}
          >
            🌍 Estimated Carbon Footprint
          </h2>

          <h1
            style={{
              fontSize: "clamp(2rem,6vw,42px)",
              color: "#22c55e",
            }}
          >
            {result} kg CO₂ / month
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "10px",
            }}
          >
            Your carbon footprint has been successfully calculated and
            saved to your dashboard.
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator;

 

