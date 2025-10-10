import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Profile = () => {
  const { token, isLoggedIn, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setUpdatedUser(res.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        alert("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [isLoggedIn, token, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/update-profile",
        updatedUser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(res.data);
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  if (loading)
    return (
      <h2 style={{ color: "#00ff41", textAlign: "center", marginTop: "100px" }}>
        Loading Profile...
      </h2>
    );

  if (!user)
    return (
      <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
        User not found
      </h2>
    );

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: '"Poppins", sans-serif',
          paddingTop: "140px",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#101012",
            borderRadius: "14px",
            padding: "40px",
            boxShadow: "0 0 20px rgba(0,255,65,0.15)",
            border: "1px solid #0FA30F",
          }}
        >
          <h1
            style={{
              color: "#00ff41",
              fontWeight: "bold",
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            My Profile
          </h1>

          {/* Avatar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #0FA30F, #00ff41)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              {user.username?.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Profile Info */}
          {!editMode ? (
            <div style={{ textAlign: "center" }}>
              <p>
                <strong style={{ color: "#0FA30F" }}>Username:</strong>{" "}
                {user.username}
              </p>
              <p>
                <strong style={{ color: "#0FA30F" }}>Email:</strong> {user.email}
              </p>
              <p>
                <strong style={{ color: "#0FA30F" }}>Role:</strong>{" "}
                <span
                  style={{
                    color:
                      user.role === "admin" ? "#00ff41" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {user.role.toUpperCase()}
                </span>
              </p>
              <p>
                <strong style={{ color: "#0FA30F" }}>Joined:</strong>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>

              <div style={{ marginTop: "25px" }}>
                <button
                  onClick={() => setEditMode(true)}
                  style={{
                    background: "#00ff41",
                    border: "none",
                    color: "#000",
                    fontWeight: "bold",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginRight: "15px",
                  }}
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  style={{
                    background: "red",
                    border: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleUpdate}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                color: "#fff",
              }}
            >
              <label>
                Username:
                <input
                  type="text"
                  value={updatedUser.username}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, username: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #0FA30F",
                    background: "#0c0c0c",
                    color: "#fff",
                    marginTop: "5px",
                  }}
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  value={updatedUser.email}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, email: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #0FA30F",
                    background: "#0c0c0c",
                    color: "#fff",
                    marginTop: "5px",
                  }}
                />
              </label>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  marginTop: "25px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    background: "#00ff41",
                    border: "none",
                    color: "#000",
                    fontWeight: "bold",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  style={{
                    background: "gray",
                    border: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
