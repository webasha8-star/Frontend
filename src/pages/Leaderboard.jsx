import React from "react";
import Layout from "../components/Layout";

// Leaderboard data
const leaderboardData = [
  {
    rank: "1",
    profileImg: "https://i.ibb.co/ZB6FNMw/green-face.png",
    alt: "0xKing",
    username: "0xKing",
    points: 99907,
    completedLabs: 923,
    title: "[0x12][SHOGUN]",
    countryCode: "BR",
  },
  {
    rank: "2",
    profileImg: "https://i.ibb.co/9vfb9dt/dark-face.png",
    alt: "Z3r0FluX",
    username: "Z3r0FluX",
    points: 49816,
    completedLabs: 332,
    title: "[0xE][GUARDIAN]",
    countryCode: "BR",
  },
  {
    rank: "3",
    profileImg: "https://i.ibb.co/NrMPYr2/pop-face.png",
    alt: "duggytuxy",
    username: "duggytuxy",
    points: 99323,
    completedLabs: 738,
    title: "[0x12][SHOGUN]",
    countryCode: "BE",
  },
  {
    rank: 4,
    profileImg: "https://i.ibb.co/9r4GBj8/meme-face.png",
    alt: "ItzGareeb",
    username: "ItzGareeb",
    points: 63850,
    completedLabs: 493,
    title: "[0xF][TITAN]",
    countryCode: "IN",
  },
  {
    rank: 5,
    profileImg: "https://i.ibb.co/KV0Q1KH/man-blue.png",
    alt: "vysokhamphou",
    username: "vysokhamphou",
    points: 89647,
    completedLabs: 713,
    title: "[0x11][VANGUARD]",
    countryCode: "KH",
  },
];

// Medal icons
const medals = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

// Tooltip map
const tooltipMap = {
  "0xKing": "Gold Rank 🥇",
  Z3r0FluX: "Silver Rank 🥈",
  duggytuxy: "Bronze Rank 🥉",
};

// Username styles
const usernameStyles = {
  "0xKing": { color: "#FFD700", fontWeight: "bold" },
  Z3r0FluX: { color: "#E6E8FA", fontWeight: "bold" },
  duggytuxy: { color: "#CD7F32", fontWeight: "bold" },
};

const Leaderboard = () => {
  return (
    <Layout>
      <main style={{ paddingTop: "130px", fontFamily: "'Poppins', sans-serif" }}>
        <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.8rem",
              marginBottom: "30px",
              fontWeight: "600",
            }}
          >
            🏆 Global Leaderboard
          </h2>

          {/* Embedded CSS */}
          <style>{`
            
            .leaderboard-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0 10px;
              color: #fff;
              background-color: #111;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 0 20px #00000055;
            }

            .leaderboard-table th {
              padding: 12px;
              background-color: #222;
              text-align: left;
              font-weight: 600;
              border-bottom: 2px solid #333;
            }

            .leaderboard-row {
              background-color: #1a1a1a;
              transition: all 0.25s ease;
              border-radius: 6px;
            }

            .leaderboard-row:hover {
              background-color: #222 !important;
              transform: scale(1.01);
              box-shadow: 0 0 10px #00ff0044;
            }

            .avatar-img {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              border: 2px solid #00ff6aff;
            }

            .flag-img {
              width: 30px;
              height: 20px;
              border-radius: 4px;
              box-shadow: 0 0 4px #000;
            }

            .top-1 { background-color: #333300 !important; }
            .top-2 { background-color: #2c2c2c !important; }
            .top-3 { background-color: #2a1a00 !important; }
          `}</style>

          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Avatar</th>
                <th>Username</th>
                <th>Points</th>
                <th>Completed Labs</th>
                <th>Title</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, index) => (
                <tr
                  key={index}
                  className={`leaderboard-row ${
                    row.rank === "1"
                      ? "top-1"
                      : row.rank === "2"
                      ? "top-2"
                      : row.rank === "3"
                      ? "top-3"
                      : ""
                  }`}
                >
                  <td style={{ padding: "10px" }}>{medals[row.rank] || row.rank}</td>
                  <td style={{ padding: "10px" }}>
                    <img src={row.profileImg} alt={row.alt} className="avatar-img" />
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      ...(usernameStyles[row.username] || {}),
                    }}
                    title={tooltipMap[row.username] || ""}
                  >
                    {row.username}
                  </td>
                  <td style={{ padding: "10px" }}>{row.points}</td>
                  <td style={{ padding: "10px" }}>{row.completedLabs}</td>
                  <td style={{ padding: "10px" }}>{row.title}</td>
                  <td style={{ padding: "10px" }}>
                    <img
                      src={`https://flagcdn.com/w40/${row.countryCode.toLowerCase()}.png`}
                      alt={row.countryCode}
                      className="flag-img"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};

export default Leaderboard;
