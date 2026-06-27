import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: "16px 28px",
    minWidth: "250px",
    border: "none",
    borderRadius: "14px",
    background: "#22c55e",
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(34,197,94,0.35)",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#020617,#0f172a)",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Hero Section */}

      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "70px",
          paddingBottom: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem,6vw,72px)",
            fontWeight: "800",
            lineHeight: "1.15",
            marginBottom: "25px",
          }}
        >
          🌍 CarbonAI
          <br />
          Sustainability Platform
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "#cbd5e1",
            fontSize: "clamp(16px,3vw,24px)",
            lineHeight: "1.8",
          }}
        >
          Measure, monitor and reduce your carbon footprint using
          Artificial Intelligence, smart analytics and personalized
          sustainability recommendations.
        </p>

        <div
          style={{
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={buttonStyle}
            onClick={() => navigate("/calculator")}
          >
            📊 Calculate My Footprint
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/dashboard")}
          >
            📈 View Dashboard
          </button>
        </div>
      </section>

            {/* Features Section */}

      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          paddingBottom: "90px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {/* Card 1 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "22px",
              padding: "35px",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px" }}>📊</div>

            <h2
              style={{
                fontSize: "30px",
                margin: "20px 0",
              }}
            >
              Smart Carbon Calculator
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              Calculate your monthly carbon footprint from
              transportation, electricity, water usage,
              waste generation and diet habits.
            </p>
          </div>

          {/* Card 2 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "22px",
              padding: "35px",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px" }}>🤖</div>

            <h2
              style={{
                fontSize: "30px",
                margin: "20px 0",
              }}
            >
              AI Recommendations
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              Receive intelligent sustainability suggestions
              based on your latest carbon footprint and
              improve your environmental impact.
            </p>
          </div>

          {/* Card 3 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "22px",
              padding: "35px",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px" }}>🌱</div>

            <h2
              style={{
                fontSize: "30px",
                margin: "20px 0",
              }}
            >
              Green Impact
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              Track your positive environmental contribution,
              reduce emissions and move towards a greener,
              more sustainable lifestyle.
            </p>
          </div>
        </div>
      </section>

            {/* Why CarbonAI */}

      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "80px 0",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem,5vw,52px)",
            marginBottom: "60px",
          }}
        >
          Why Choose CarbonAI?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {/* Card 1 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>📈</div>

            <h3 style={{ fontSize: "28px" }}>
              Smart Analytics
            </h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
              Visual dashboards help you understand your
              environmental impact over time.
            </p>
          </div>

          {/* Card 2 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>💡</div>

            <h3 style={{ fontSize: "28px" }}>
              AI Insights
            </h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
              Personalized AI recommendations help reduce
              your carbon emissions efficiently.
            </p>
          </div>

          {/* Card 3 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>🔒</div>

            <h3 style={{ fontSize: "28px" }}>
              Secure Data
            </h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
              All your sustainability records remain
              private and securely stored.
            </p>
          </div>

          {/* Card 4 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>🎯</div>

            <h3 style={{ fontSize: "28px" }}>
              Goal Tracking
            </h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
              Monitor your progress toward achieving a
              lower monthly carbon footprint.
            </p>
          </div>

          {/* Card 5 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>🌍</div>

            <h3 style={{ fontSize: "28px" }}>
              Eco Friendly
            </h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
              Every improvement contributes to a greener,
              healthier planet.
            </p>
          </div>

          {/* Card 6 */}

          <div
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "55px" }}>⚡</div>

            <h3 style={{ fontSize: "28px" }}>
              Fast Performance
            </h3>

            <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
              Calculate your footprint instantly with
              real-time analytics powered by Django.
            </p>
          </div>
        </div>
      </section>
            {/* Call To Action */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "80px auto",
          background: "linear-gradient(135deg,#1e293b,#0f172a)",
          borderRadius: "25px",
          padding: "60px 40px",
          textAlign: "center",
          border: "1px solid #334155",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem,5vw,42px)",
            marginBottom: "20px",
          }}
        >
          🌍 Start Your Sustainability Journey Today
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "clamp(16px,3vw,20px)",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "0 auto 35px",
          }}
        >
          Measure your carbon footprint, receive AI-powered
          recommendations and contribute towards a greener future.
        </p>

        <button
          onClick={() => navigate("/calculator")}
          style={{
            padding: "18px 45px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "20px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(34,197,94,.35)",
          }}
        >
          🚀 Get Started
        </button>
      </section>

      {/* Footer */}

      <footer
        style={{
          marginTop: "70px",
          padding: "40px 20px",
          borderTop: "1px solid #334155",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
          }}
        >
          🌍 CarbonAI
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Smart Carbon Tracking • AI Sustainability Coach •
          Green Future
        </p>

        <p
          style={{
            color: "#64748b",
            marginTop: "20px",
            fontSize: "15px",
          }}
        >
          © 2026 CarbonAI | Built with React • Django • JWT • AI
        </p>
      </footer>

    </div>
  );
}

export default Home;