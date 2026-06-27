import { useEffect, useState } from "react";
import axios from "axios";
import CarbonChart from "../components/CarbonChart";
import { Leaf, Trees, BarChart3, Database } from "lucide-react";

function Dashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

const fetchRecords = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "https://carbonfootprintai.onrender.com/api/records/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setRecords(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const latestRecord =
    records.length > 0 ? records[0] : null;

  const carbonScore = latestRecord
    ? Number(latestRecord.carbon_score).toFixed(2)
    : 0;

  const treesNeeded =
    latestRecord ? Math.ceil(carbonScore / 20) : 0;

  const sustainabilityScore =
    records.length === 0
      ? 0
      : carbonScore < 200
      ? 95
      : carbonScore < 400
      ? 75
      : carbonScore < 600
      ? 50
      : 25;

  const latestDiet = latestRecord?.diet || "N/A";

  const targetCarbon = 300;

  const progress =
    records.length === 0
      ? 0
      : Math.min(
          100,
          Math.round(
            (targetCarbon / Number(carbonScore)) * 100
          )
        );

  const carbonStatus =
    records.length === 0
      ? "No Data"
      : carbonScore < 250
      ? "🟢 Low"
      : carbonScore < 500
      ? "🟡 Moderate"
      : "🔴 High";

  const previousRecord =
    records.length > 1 ? records[1] : null;

  const improvement = previousRecord
    ? Math.round(
        ((previousRecord.carbon_score -
          latestRecord.carbon_score) /
          previousRecord.carbon_score) *
          100
      )
    : 0;

  const cardStyle = {
    background:
      "linear-gradient(135deg,#1e293b,#0f172a)",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid #334155",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
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
        fontSize: "clamp(2rem,6vw,42px)",
        fontWeight: "700",
      }}
    >
      Carbon Intelligence Dashboard
    </h1>

    <p
      style={{
        textAlign: "center",
        color: "#94a3b8",
        marginBottom: "35px",
      }}
    >
      Track • Analyze • Reduce Your Carbon Footprint
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
        gap: "22px",
        width: "100%",
      }}
    >
      <div style={cardStyle}>
        <h3>
          <Leaf size={22} /> Carbon Score
        </h3>

        <h2>{carbonScore} kg CO₂</h2>
      </div>

      <div style={cardStyle}>
        <h3>
          <Trees size={22} /> Trees Needed
        </h3>

        <h2>{treesNeeded} Trees</h2>
      </div>

      <div style={cardStyle}>
        <h3>
          <BarChart3 size={22} />
          Sustainability Score
        </h3>

        <h2>{sustainabilityScore}/100</h2>
      </div>

      <div style={cardStyle}>
        <h3>
          <Database size={22} />
          Total Records
        </h3>

        <h2>{records.length}</h2>
      </div>

      <div style={cardStyle}>
        <h3>🍖 Diet Type</h3>

        <h2>{latestDiet}</h2>
      </div>

      <div style={cardStyle}>
        <h3>🎯 Carbon Goal</h3>

        <h2>{targetCarbon} kg CO₂</h2>
      </div>

      <div style={cardStyle}>
        <h3>📈 Carbon Status</h3>

        <h2>{carbonStatus}</h2>
      </div>
    </div>

   

  <div
  style={{
    width: "100%",
    overflowX: "auto",
    marginTop: "30px",
  }}
>
  <CarbonChart />
</div>

<div
  style={{
    marginTop: "35px",
    background: "#1e293b",
    padding: "30px",
    borderRadius: "20px",
  }}
>
    
      <h2>🎯 Goal Tracker</h2>

      <p>
        Current Score:
        <strong> {carbonScore} kg CO₂</strong>
      </p>

      <p>
        Target Score:
        <strong> {targetCarbon} kg CO₂</strong>
      </p>

      <div
        style={{
          width: "100%",
          height: "22px",
          background: "#334155",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "18px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#22c55e",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "12px",
          fontWeight: "600",
        }}
      >
        Progress : {progress}%
      </p>

      {previousRecord && (
        <p>
          {improvement > 0
            ? `📉 Carbon reduced by ${improvement}%`
            : `📈 Carbon increased by ${Math.abs(
                improvement
              )}%`}
        </p>
      )}
    </div>

        <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2>💡 Sustainability Insights</h2>

      {records.length === 0 ? (
        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.8",
          }}
        >
          No carbon data available yet.
          <br />
          Complete your first carbon calculation to receive
          personalized sustainability insights and AI recommendations.
        </p>
      ) : (
        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.8",
          }}
        >
          Your latest carbon footprint is
          <strong> {carbonScore} kg CO₂</strong>.
          <br /><br />

          Continue reducing electricity usage,
          use public transport whenever possible,
          minimize waste generation,
          conserve water,
          and adopt more sustainable lifestyle choices.

          <br /><br />

          Small improvements every month can greatly
          reduce your annual carbon emissions.
        </p>
      )}
    </div>

    <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        📋 Recent Activity
      </h2>

      {records.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "#94a3b8",
          }}
        >
          <h3>No Records Found</h3>

          <p>
            Go to the Calculator page and create
            your first carbon footprint record.
          </p>
        </div>
      ) : (
        <div
          style={{
            maxHeight: "450px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {records.map((record) => (
            <div
              key={record.id}
              style={{
                padding: "18px",
                borderBottom: "1px solid #334155",
              }}
            >
              <p>🚗 Travel : {record.travel} km</p>

              <p>⚡ Electricity : {record.electricity} kWh</p>

              <p>🍖 Diet : {record.diet}</p>

              <p>🗑️ Waste : {record.waste} kg</p>

              <p>🚰 Water : {record.water} L</p>

              <p>
                🌍 Carbon :
                <strong> {record.carbon_score} kg CO₂</strong>
              </p>

              <small style={{ color: "#94a3b8" }}>
                {new Date(record.created_at).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>

  </div>
);

}

export default Dashboard;