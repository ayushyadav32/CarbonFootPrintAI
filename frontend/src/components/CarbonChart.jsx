import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function CarbonChart() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://127.0.0.1:8000/api/records/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRecords(response.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  if (records.length === 0) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "40px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2>📈 Carbon Trend Analysis</h2>
        <p>No Carbon History Yet</p>
      </div>
    );
  }

  const data = {
    labels: records.map((record) => record.created_at),

    datasets: [
      {
        label: "Carbon Emissions (kg CO₂)",
        data: records.map((record) => record.carbon_score),

        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.25)",

        pointBackgroundColor: "#22c55e",
        pointBorderColor: "#ffffff",

        pointRadius: 6,
        pointHoverRadius: 8,

        borderWidth: 4,

        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "white",
        },

        grid: {
          color: "#374151",
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "white",
        },

        grid: {
          color: "#374151",
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#1e293b,#111827)",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)",
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        📈 Carbon Trend Analysis
      </h2>

      <Line data={data} options={options} />
    </div>
  );
}

export default CarbonChart;