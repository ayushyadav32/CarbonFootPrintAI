import { useEffect, useState } from "react";
import axios from "axios";

function History() {
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
      console.log(error);
    }
  };

  const deleteRecord = async (id) => {
    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `https://carbonfootprintai.onrender.com/api/records/${id}/delete/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Record Deleted Successfully");

      fetchRecords();

    } catch (error) {

      console.log(error);

      alert("❌ Unable to delete record");

    }
  };

    return (
    <div
      style={{
        padding: "15px",
        boxSizing: "border-box",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "35px",
          fontSize: "clamp(2rem,6vw,42px)",
        }}
      >
        📜 Carbon History
      </h1>

      {records.length === 0 ? (

        <h2
          style={{
            textAlign: "center",
            color: "#94a3b8",
          }}
        >
          No Records Found
        </h2>

      ) : (

        <div
          style={{
            overflowX: "auto",
          }}
        >

          <table
  style={{
    width: "100%",
    tableLayout: "auto",
    borderCollapse: "collapse",
    background: "#1e293b",
    borderRadius: "15px",
    overflow: "hidden",
  }}
>

            <thead>

              <tr
                style={{
                  background: "#22c55e",
                  color: "white",
                }}
              >

                <th style={{ padding: "15px" }}>Date</th>
                <th>Carbon</th>
                <th>Travel</th>
                <th>Electricity</th>
                <th>Diet</th>
                <th>Waste</th>
                <th>Water</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {records.map((record) => (

                <tr
                  key={record.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #334155",
                  }}
                >

                  <td style={{ padding: "15px" }}>
                    {record.created_at}
                  </td>

                  <td>{record.carbon_score}</td>

                  <td>{record.travel} km</td>

                  <td>{record.electricity} kWh</td>

                  <td>{record.diet}</td>

                  <td>{record.waste} kg</td>

                  <td>{record.water} L</td>

                  <td>

                    <button
                      onClick={() => deleteRecord(record.id)}
                    style={{
                            background: "#ef4444",
                            color: "white",
                            border: "none",
                            padding: "10px 14px",
                            fontSize: "14px",
                            borderRadius: "8px",
                            cursor: "pointer",
}}
                    >
                      🗑 Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default History;