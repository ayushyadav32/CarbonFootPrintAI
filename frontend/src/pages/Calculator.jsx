import { useState } from "react";
import axios from "axios";

function Calculator() {
  const [travel, setTravel] = useState("");
  const [electricity, setElectricity] = useState("");
  const [result, setResult] = useState(null);

  const calculateCarbon = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/calculate/",
        {
          travel,
          electricity,
        }
      );

      setResult(response.data.carbon_score);
    } catch (error) {
      console.error(error);
      alert("Error connecting to Django API");
    }
  };

  return (
    <div
      style={{
        color: "white",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>🧮 Carbon Calculator</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
          margin: "30px auto",
        }}
      >
        <input
          type="number"
          placeholder="Travel Distance (km/month)"
          value={travel}
          onChange={(e) => setTravel(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
          }}
        />

        <input
          type="number"
          placeholder="Electricity Units (kWh/month)"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={calculateCarbon}
          style={{
            padding: "12px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Calculate
        </button>
      </div>

      {result && (
        <h2>
          🌍 Estimated Carbon Footprint: {result} kg CO₂ / month
        </h2>
      )}
    </div>
  );
}

export default Calculator;