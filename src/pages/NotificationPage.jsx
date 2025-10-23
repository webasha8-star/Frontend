import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./css/NotificationPage.css";

const NotificationPage = () => {
  const { token } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Replace this with your real API endpoint later
        // const res = await axios.get("/api/notifications", {
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        // setNotifications(res.data);

        // 🧪 Mock data for now
        setNotifications([
          {
            id: 1,
            message: "New lab added: Web Exploitation",
            read: false,
            createdAt: new Date(),
          },
          {
            id: 2,
            message: "Your challenge results are now available!",
            read: true,
            createdAt: new Date(Date.now() - 3600000),
          },
          {
            id: 3,
            message: "Admin posted a new OSCP simulation lab.",
            read: false,
            createdAt: new Date(Date.now() - 7200000),
          },
        ]);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [token]);

  // ✅ Mark all notifications as read
  const markAllAsRead = async () => {
    try {
      // Example backend API call
      // await axios.put("/api/notifications/mark-all-read", {}, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });

      const updated = notifications.map((n) => ({ ...n, read: true }));
      setNotifications(updated);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  return (
    <>
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Page Content */}
      <div className="notification-page">
        <div className="notification-header">
          <h2>🔔 Notifications</h2>
          {notifications.length > 0 && (
            <button className="mark-read-btn" onClick={markAllAsRead}>
              Mark all as read
            </button>
          )}
        </div>

        {loading ? (
          <p className="no-notifications">Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <p className="no-notifications">You have no new notifications</p>
        ) : (
          <ul className="notification-list">
            {notifications.map((note) => (
              <li
                key={note.id}
                className={`notification-item ${note.read ? "read" : "unread"}`}
              >
                <div className="notification-message">{note.message}</div>
                <div className="notification-time">
                  {new Date(note.createdAt).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default NotificationPage;
