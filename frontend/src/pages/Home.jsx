function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            maxWidth: "1000px",
            margin: "0 auto 20px auto",
          }}
        >
          🌱 Carbon Footprint Awareness Platform
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Understand, track and reduce your carbon footprint with AI-powered
          sustainability insights and personalized recommendations.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            border: "none",
            borderRadius: "10px",
            background: "#22c55e",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Features */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            width: "300px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>📊 Carbon Calculator</h2>
          <p>
            Calculate your carbon footprint based on travel, electricity usage,
            and lifestyle habits.
          </p>
        </div>

        <div
          style={{
            width: "300px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>🤖 AI Eco Coach</h2>
          <p>
            Get personalized sustainability recommendations powered by AI.
          </p>
        </div>

        <div
          style={{
            width: "300px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>🏆 Eco Challenges</h2>
          <p>
            Complete green challenges, earn points and compete on the
            leaderboard.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          marginTop: "100px",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <div>
          <h1>10K+</h1>
          <p>Users</p>
        </div>

        <div>
          <h1>500+</h1>
          <p>Tons CO₂ Reduced</p>
        </div>

        <div>
          <h1>95%</h1>
          <p>AI Recommendation Accuracy</p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          paddingBottom: "40px",
          color: "#94a3b8",
        }}
      >
        © 2026 Carbon Footprint AI Platform | Built with React + Django + AI
      </div>
    </div>
  );
}

export default Home;