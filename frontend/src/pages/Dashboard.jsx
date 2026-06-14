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
const response = await axios.get(
"http://127.0.0.1:8000/api/records/"
);
setRecords(response.data);
} catch (error) {
console.error(error);
}
};

const latestRecord =
records.length > 0 ? records[0] : null;

const carbonScore = latestRecord
? latestRecord.carbon_score
: 0;

const treesNeeded = Math.ceil(carbonScore / 20);

const sustainabilityScore = Math.max(
0,
100 - Math.floor(carbonScore / 2)
);

const cardStyle = {
background: "linear-gradient(135deg,#1e293b,#0f172a)",
padding: "25px",
borderRadius: "20px",
border: "1px solid #334155",
};

return (
  <div
    style={{
      padding: "25px 40px",
      color: "white",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "10px",
        color: "#ffffff",
      }}
    >
      Carbon Intelligence Dashboard
    </h1>

    <p
      style={{
        textAlign: "center",
        color: "#94a3b8",
        fontSize: "16px",
        marginBottom: "30px",
      }}
    >
      Track • Analyze • Reduce Your Carbon Footprint
    </p>

    <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "30px",
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
          <BarChart3 size={22} /> Sustainability Score
        </h3>
        <h2>{sustainabilityScore}/100</h2>
      </div>

      <div style={cardStyle}>
        <h3>
          <Database size={22} /> Total Records
        </h3>
        <h2>{records.length}</h2>
      </div>
    </div>

    <CarbonChart />
    <div
  style={{
    marginTop: "30px",
    background: "#1f2937",
    padding: "20px",
    borderRadius: "12px",
  }}
>
  <h2>Recent Activity</h2>

  {records.length === 0 ? (
    <p>No records found</p>
  ) : (
    records.map((record, index) => (
      <div
        key={index}
        style={{
          marginTop: "10px",
          padding: "10px",
          borderBottom: "1px solid #374151",
        }}
      >
        <p>🚗 Travel: {record.travel} km</p>
        <p>⚡ Electricity: {record.electricity} kWh</p>
        <p>🌍 Carbon: {record.carbon_score} kg CO₂</p>
      </div>
    ))
  )}
</div>
  </div>
);
}
export default Dashboard;
