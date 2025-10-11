import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./Header.css"; // ✅ Add CSS import

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [hideHeader, setHideHeader] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ for mobile nav toggle

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
      { label: "OSCP Simulation", path: "/oscp-style-exercise" },
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
      <header className={`header-1 ${hideHeader ? "hide" : ""}`}>
        <div className="container-fluid">
          <div className="header-main">
            {/* ✅ Hamburger Menu for mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            {/* ✅ Left Side (Logo + Menu) */}
            <div className="header-left">
              <div className="logo">
                <Link to="/" className="header-logo">
                  <img
                    src="/assets/img/logo/New_Logo.png"
                    alt="CrackMeNow Logo"
                  />
                </Link>
              </div>

              {!showSearch && (
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul className={menuOpen ? "active" : ""}>
                      <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                          Home
                        </Link>
                      </li>
                      <li className="has-dropdown">
                        <Link>Learn</Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              to="/labs/1"
                              onClick={() => setMenuOpen(false)}
                            >
                              Labs
                            </Link>
                          </li>
                          <li>
                            <Link>
                              Get Certified <i className="fas fa-angle-right"></i>
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link
                                  to="/OSCP_Certificate"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  OSCP
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/oscp-style-exercise"
                              onClick={() => setMenuOpen(false)}
                            >
                              OSCP Simulations
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link>Competes</Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              to="/upcoming-challenges"
                              onClick={() => setMenuOpen(false)}
                            >
                              Upcoming Challenges
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/historical-challenges"
                              onClick={() => setMenuOpen(false)}
                            >
                              Historical Challenges
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Leaderboard"
                              onClick={() => setMenuOpen(false)}
                            >
                              Leaderboard
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link>OSCP Track</Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              to="/training-path"
                              onClick={() => setMenuOpen(false)}
                            >
                              Training Path
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/testimonial"
                              onClick={() => setMenuOpen(false)}
                            >
                              Testimonial
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/gallery"
                              onClick={() => setMenuOpen(false)}
                            >
                              Gallery
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq" onClick={() => setMenuOpen(false)}>
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blank" onClick={() => setMenuOpen(false)}>
                          Blog
                        </Link>
                      </li>

                      {userRole === "admin" && (
                        <li>
                          <Link
                            to="/admin-dashboard"
                            onClick={() => setMenuOpen(false)}
                          >
                            Admin Dashboard
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              )}
            </div>

            {/* ✅ Right Side (Search + Profile + Auth Buttons) */}
            <div className="header-right">
              {!showSearch && (
                <button onClick={() => setShowSearch(true)}>
                  <i className="fas fa-search"></i>
                </button>
              )}

              {isLoggedIn && (
                <div className="profile-menu">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="profile-btn"
                  >
                    <i className="fas fa-user-circle"></i>
                  </button>

                  {showProfileMenu && (
                    <div className="profile-dropdown">
                      <Link to="/profile" onClick={() => setShowProfileMenu(false)}>
                        My Profile
                      </Link>

                      {userRole === "admin" && (
                        <Link
                          to="/admin-dashboard"
                          style={{ color: "#0FA30F" }}
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Admin Dashboard
                        </Link>
                      )}

                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              )}

              {!isLoggedIn && (
                <>
                  <button className="login-btn" onClick={handleLogin}>
                    Log In
                  </button>
                  <Link to="/signup">
                    <button className="join-btn">Join For Free</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 🔍 Search Modal */}
      {showSearch && (
        <div className="search-modal">
          <button
            className="close-btn"
            onClick={() => {
              setShowSearch(false);
              setSearchQuery("");
              setSuggestions([]);
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
          />

          <ul>
            {suggestions.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                    setSuggestions([]);
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
