import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CarbonChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Carbon Emissions (kg CO₂)",
        data: [120, 95, 110, 85, 121, 100, 90],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.25)",
        pointBackgroundColor: "#22c55e",
        pointBorderColor: "#ffffff",
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
        borderWidth: 4,
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
      title: {
        display: false,
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
        background:
          "linear-gradient(135deg, #1e293b, #111827)",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
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