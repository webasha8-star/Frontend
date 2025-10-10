import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [hideHeader, setHideHeader] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // ✅ NEW
  const [userRole, setUserRole] = useState(null); // ✅ To check admin role

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHideHeader(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    localStorage.setItem("returnPath", location.pathname);
    navigate("/login");
  };

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSuggestions([]);
      return;
    }

    const allItems = [
      { label: "Web Exploitation", path: "/web-exploitation" },
      { label: "OSCP Simulation", path: "/oscp-style-exercise" },
      { label: "Linux Privilege Escalation", path: "/linux-priv-esc" },
      { label: "Upcoming Challenges", path: "/upcoming-challenges" },
      { label: "Leaderboard", path: "/Leaderboard" },
      { label: "Testimonial", path: "/testimonial" },
      { label: "Training Path", path: "/training-path" },
      { label: "Gallery", path: "/gallery" },
      { label: "FAQ", path: "/faq" },
    ];

    const filtered = allItems.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSearch(false);
        setSearchQuery("");
        setSuggestions([]);
      }
    };

    if (showSearch) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  return (
    <>
      <header
        className={`header-1 ${hideHeader ? "hide" : ""}`}
        style={{
          position: "fixed",
          top: hideHeader ? "-100px" : "0",
          width: "100%",
          zIndex: 1000,
          transition: "top 0.3s ease-in-out",
        }}
      >
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main d-flex justify-content-between align-items-center">
              {/* ✅ Left Side (Logo + Menu) */}
              <div className="header-left d-flex align-items-center" style={{ flex: 1 }}>
                <div className="logo">
                  <Link to="/" className="header-logo">
                    <img
                      src="/assets/img/logo/New_Logo.png"
                      alt="CrackMeNow Logo"
                      style={{
                        maxHeight: "150px",
                        width: "auto",
                        verticalAlign: "middle",
                        marginRight: "12px",
                      }}
                    />
                  </Link>
                </div>

                {!showSearch && (
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li><Link to="/">Home</Link></li>
                          <li className="has-dropdown">
                            <Link>Learn</Link>
                            <ul className="submenu">
                              <li><Link to="/labs/1">Labs</Link></li>
                              <li>
                                <Link>Get Certified <i className="fas fa-angle-right"></i></Link>
                                <ul className="submenu">
                                  <li><Link to="/OSCP_Certificate ">OSCP</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/oscp-style-exercise">OSCP Simulations</Link></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link>Competes</Link>
                            <ul className="submenu">
                              <li><Link to="/upcoming-challenges">Upcoming Challenges</Link></li>
                              <li><Link to="/historical-challenges">Historical Challenges</Link></li>
                              <li><Link to="/Leaderboard">Leaderboard</Link></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link>OSCP Track</Link>
                            <ul className="submenu">
                              <li><Link to="/training-path">Training Path</Link></li>
                              <li><Link to="/testimonial">Testimonial</Link></li>
                              <li><Link to="/gallery">Gallery</Link></li>
                              <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/blank">Blog</Link></li>

                          {/* ✅ Admin Dashboard link only for Admin */}
                          {userRole === "admin" && (
                            <li>
                              <Link to="/admin-dashboard">
                                Admin Dashboard
                              </Link>
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>

              {/* ✅ Right Side (Search + Profile + Auth Buttons) */}
              <div className="header-right d-flex align-items-center" style={{ gap: "35px" }}>
                {/* 🔍 Search Icon */}
                {!showSearch && (
                  <button
                    onClick={() => setShowSearch(true)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "20px",
                      color: "#e4e4e4ff",
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                )}

                {/* 👤 Profile Icon */}
                {isLoggedIn && (
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "22px",
                      color: "#e4e4e4ff",
                      }}
                    >
                      <i className="fas fa-user-circle"></i>
                    </button>

                    {showProfileMenu && (
                      <div
                        style={{
                          position: "absolute",
                          top: "35px",
                          right: "0",
                          background: "#1b1b1f",
                          color: "#fff",
                          borderRadius: "8px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                          minWidth: "180px",
                          zIndex: 1000,
                        }}
                      >
                        <Link
                          to="/profile"
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            color: "#fff",
                            textDecoration: "none",
                            borderBottom: "1px solid #333",
                          }}
                        >
                          My Profile
                        </Link>

                        {userRole === "admin" && (
                          <Link
                            to="/admin-dashboard"
                            style={{
                              display: "block",
                              padding: "10px 16px",
                              color: "#0FA30F",
                              textDecoration: "none",
                              borderBottom: "1px solid #333",
                            }}
                          >
                            Admin Dashboard
                          </Link>
                        )}

                        <button
                          onClick={handleLogout}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 16px",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            color: "#e63946",
                            cursor: "pointer",
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Auth Buttons */}
                {!isLoggedIn && (
                  <>
                    <button
                      onClick={handleLogin}
                      style={{
                        padding: "2px 16px",
                        fontSize: "1rem",
                        height: "32px",
                        borderRadius: "4px",
                        background: "#0FA30F",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Log In
                    </button>
                    <Link to="/signup">
                      <button
                        className="glow-btn"
                        style={{
                          padding: "2px 16px",
                          fontSize: "1rem",
                          height: "32px",
                          borderRadius: "4px",
                          background: "#0FA30F",
                          color: "#fff",
                          border: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Join For Free
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 🔍 Search Modal */}
      {showSearch && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 20px",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            animation: "fadeSlideIn 0.3s ease-in-out",
          }}
        >
          <style>
            {`
              @keyframes fadeSlideIn {
                0% {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>

          <button
            onClick={() => {
              setShowSearch(false);
              setSearchQuery("");
              setSuggestions([]);
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "28px",
              background: "none",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            ❌
          </button>

          <input
            type="text"
            placeholder="Search CrackMeNow..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            style={{
              width: "90%",
              maxWidth: "600px",
              padding: "16px 24px",
              fontSize: "1.5rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0 0 10px rgba(255,255,255,0.3)",
              outline: "none",
              marginBottom: "30px",
            }}
          />

          <ul style={{ width: "90%", maxWidth: "600px", listStyle: "none", padding: 0 }}>
            {suggestions.map((item, idx) => (
              <li key={idx} style={{ padding: "10px 16px" }}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                    setSuggestions([]);
                  }}
                  style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    textDecoration: "none",
                    display: "block",
                    transition: "0.3s",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
