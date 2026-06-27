import { useEffect, useState } from "react";
import axios from "axios";
import {
  Bot,
  Activity,
  Car,
  Zap,
  Beef,
  Trash2,
  Droplets,
  Leaf,
} from "lucide-react";

function AICoach() {
  const [record, setRecord] = useState(null);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetchLatestRecord();
  }, []);

  const fetchLatestRecord = async () => {
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

      if (response.data.length === 0) {
        setRecord(null);
        return;
      }

      const latest = response.data[0];

      setRecord(latest);

      let recommendations = [];

      if (latest.travel > 400) {
        recommendations.push({
          icon: <Car color="#22c55e" />,
          title: "Transportation",
          text:
            "Reduce travel by using public transport, cycling or carpooling.",
        });
      }

      if (latest.electricity > 350) {
        recommendations.push({
          icon: <Zap color="#facc15" />,
          title: "Electricity",
          text:
            "Switch to LED bulbs and energy-efficient appliances.",
        });
      }

      if (latest.diet === "Non-Vegetarian") {
        recommendations.push({
          icon: <Beef color="#ef4444" />,
          title: "Diet",
          text:
            "Reduce meat consumption and include more plant-based meals.",
        });
      }

      if (latest.waste > 15) {
        recommendations.push({
          icon: <Trash2 color="#22c55e" />,
          title: "Waste",
          text:
            "Recycle household waste and avoid single-use plastics.",
        });
      }

      if (latest.water > 200) {
        recommendations.push({
          icon: <Droplets color="#38bdf8" />,
          title: "Water",
          text:
            "Reduce water usage and fix leakage if any.",
        });
      }

      if (recommendations.length === 0) {
        recommendations.push({
          icon: <Leaf color="#22c55e" />,
          title: "Excellent",
          text:
            "Excellent! Your carbon footprint is already sustainable.",
        });
      }

      setTips(recommendations);

    } catch (error) {
      console.error(error);
    }
  };

    if (!record) {
    return (
      <div
        style={{
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <Bot size={80} color="#22c55e" />

        <h1>No Carbon Records Found</h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            marginTop: "15px",
          }}
        >
          You haven't calculated your carbon footprint yet.
          <br />
          Go to the Calculator page and create your first record.
        </p>
      </div>
    );
  }

  const carbonScore = Number(record.carbon_score).toFixed(2);

  const carbonStatus =
    carbonScore < 250
      ? "🟢 Low Impact"
      : carbonScore < 500
      ? "🟡 Moderate Impact"
      : "🔴 High Impact";

  const carbonGrade =
    carbonScore < 200
      ? "A+"
      : carbonScore < 400
      ? "A"
      : carbonScore < 700
      ? "B"
      : carbonScore < 1000
      ? "C"
      : "D";

  const monthlySaving =
    (record.travel > 400 ? 90 : 0) +
    (record.electricity > 350 ? 120 : 0) +
    (record.diet === "Non-Vegetarian" ? 70 : 0) +
    (record.waste > 15 ? 35 : 0) +
    (record.water > 200 ? 20 : 0);

    const challenges = [
  {
    task: "🚶 Walk 5 km today",
    completed: record.travel < 300,
  },
  {
    task: "💧 Save 20 Litres of Water",
    completed: record.water < 180,
  },
  {
    task: "♻️ Reduce Household Waste",
    completed: record.waste < 10,
  },
  {
    task: "🥗 Eat One Vegetarian Meal",
    completed: record.diet !== "Non-Vegetarian",
  },
];

const completedChallenges =
  challenges.filter((c) => c.completed).length;

const progress = Math.round(
  (completedChallenges / challenges.length) * 100
);

const weeklyChallenges = [];

if (record.travel > 400) {
  weeklyChallenges.push("🚶 Reduce travel by 30 km this week");
} else {
  weeklyChallenges.push("🚶 Maintain your low travel this week");
}

if (record.electricity > 350) {
  weeklyChallenges.push("💡 Reduce electricity usage by 10%");
} else {
  weeklyChallenges.push("⚡ Keep your electricity usage efficient");
}

if (record.waste > 15) {
  weeklyChallenges.push("♻️ Recycle household waste");
} else {
  weeklyChallenges.push("🗑️ Continue minimizing waste");
}

if (record.water > 200) {
  weeklyChallenges.push("💧 Save 50 litres of water daily");
} else {
  weeklyChallenges.push("🚰 Great! Continue saving water");
}

if (record.diet === "Non-Vegetarian") {
  weeklyChallenges.push("🥗 Eat vegetarian meals twice this week");
} else {
  weeklyChallenges.push("🌱 Continue your sustainable diet");
}



  return (
    <div
      style={{
        padding: "15px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem,6vw,46px)",
          marginBottom: "30px",
        }}
      >
        🤖 AI Sustainability Coach
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "25px",
        }}
      >
        <h2>
          <Activity size={28} /> Latest Carbon Analysis
        </h2>

        <p>🌍 Carbon Score: <b>{carbonScore} kg CO₂</b></p>

        <p>📈 Status: <b>{carbonStatus}</b></p>

        <p>🏆 Carbon Grade: <b>{carbonGrade}</b></p>

        <p>🎯 Target: <b>Below 300 kg CO₂</b></p>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "25px",
        }}
      >
        <h2>💡 Personalized Recommendations</h2>

        {tips.map((tip, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "15px",
              background: "#0f172a",
              padding: "18px",
              borderRadius: "15px",
              marginTop: "18px",
              border: "1px solid #334155",
            }}
          >
            {tip.icon}

            <div>
              <h3>{tip.title}</h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                {tip.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🌱 Estimated Monthly Saving</h2>

          <h1 style={{ color: "#22c55e" }}>
            {monthlySaving} kg CO₂
          </h1>

          <p style={{ color: "#cbd5e1" }}>
            Following these recommendations can
            reduce your monthly emissions by nearly
            <b> {monthlySaving} kg CO₂.</b>
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🎯 Weekly Eco Challenge</h2>

<ul
  style={{
    color: "#cbd5e1",
    lineHeight: "2",
  }}
>
  {weeklyChallenges.map((challenge, index) => (
    <li key={index}>{challenge}</li>
  ))}
</ul>
        </div>
      </div>

      <div
        style={{
          marginTop: "25px",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        
  <h2>🎯 Daily Eco Challenges</h2>

  {challenges.map((challenge, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "15px",
        padding: "12px",
        background: "#0f172a",
        borderRadius: "10px",
      }}
    >
      <span>{challenge.task}</span>

      <span
        style={{
          fontSize: "22px",
        }}
      >
        {challenge.completed ? "✅" : "⬜"}
      </span>
    </div>
    
  
  ))}

  <div
    style={{
      marginTop: "25px",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "18px",
        background: "#334155",
        borderRadius: "20px",
        overflow: "hidden",
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
        color: "#cbd5e1",
      }}
    >
      {completedChallenges} / {challenges.length} Challenges Completed
      ({progress}%)
    </p>
  </div>
</div>

<div
  style={{
    marginTop: "25px",
    background: "#1e293b",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
  }}
>
  <h2>🏆 Achievement</h2>

  <h1
    style={{
      color: "#22c55e",
      fontSize: "clamp(2rem,6vw,42px)",
    }}
  >
    {progress === 100
      ? "🌍 Eco Champion"
      : progress >= 75
      ? "🥇 Green Hero"
      : progress >= 50
      ? "🌱 Eco Starter"
      : "🚀 Beginner"}
  </h1>

  <p
    style={{
      color: "#cbd5e1",
      fontSize: "clamp(2rem,6vw,42px)",
    }}
  >
    Complete more eco challenges to unlock higher achievements.
  </p>
</div>
        
        <h2>📊 Overall Assessment</h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "2",
          }}
        >
          Your current carbon footprint is
          <b> {carbonStatus}</b>.
          <br /><br />

          Current Grade:
          <b> {carbonGrade}</b>.

          Continue following the recommendations
          to achieve the target of
          <b> below 300 kg CO₂ per month.</b>
        </p>
      </div>
    
  );
}

export default AICoach;