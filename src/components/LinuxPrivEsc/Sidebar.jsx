import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="gt-main-sideber">
      <div className="gt-single-sideber-widgett">
        <h4>Upcoming Exercises</h4>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li>SUID Exploitation</li>
              <li>vs</li>
              <li>Basic PrivEsc</li>
              <li className="text">
                <i className="fa-solid fa-angles-right"></i>
              </li>
            </ul>
            <ul className="gt-date-list">
              <li>
                <i className="fa-regular fa-calendar"></i>
                30 May, 2024
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                Difficulty: Easy
              </li>
            </ul>
          </div>
        </div>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li>Kernel Exploits</li>
              <li>vs</li>
              <li>Advanced PrivEsc</li>
              <li className="text">
                <i className="fa-solid fa-angles-right"></i>
              </li>
            </ul>
            <ul className="gt-date-list">
              <li>
                <i className="fa-regular fa-calendar"></i>
                1 June, 2024
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                Difficulty: Hard
              </li>
            </ul>
          </div>
        </div>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li>Cron Jobs</li>
              <li>vs</li>
              <li>Scheduled Tasks</li>
              <li className="text">
                <i className="fa-solid fa-angles-right"></i>
              </li>
            </ul>
            <ul className="gt-date-list">
              <li>
                <i className="fa-regular fa-calendar"></i>
                3 June, 2024
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                Difficulty: Medium
              </li>
            </ul>
          </div>
        </div>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li>Container Escape</li>
              <li>vs</li>
              <li>Docker PrivEsc</li>
              <li className="text">
                <i className="fa-solid fa-angles-right"></i>
              </li>
            </ul>
            <ul className="gt-date-list">
              <li>
                <i className="fa-regular fa-calendar"></i>
                5 June, 2024
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                Difficulty: Expert
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="gt-contact-bg bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/match-details/bg.jpg')" }}>
        <div className="gt-contact-content">
          <h3>Need Help?</h3>
          <p>Stuck on an exercise? Our community is here to help 24/7</p>
          <div className="gt-contact-item">
            <div className="gt-icon">
              <i className="fa-solid fa-discord"></i>
            </div>
            <ul className="gt-list">
              <li><span>Join Discord:</span></li>
              <li><a href="https://discord.gg/linuxprivesc">Linux PrivEsc Community</a></li>
            </ul>
          </div>
          <div className="gt-contact-item">
            <div className="gt-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <ul className="gt-list">
              <li><span>Email Support</span></li>
              <li><a href="mailto:support@linuxprivesc.com">
                support@linuxprivesc.com
              </a></li>
            </ul>
          </div>
          <div className="gt-contact-item mb-0">
            <div className="gt-icon">
              <i className="fa-solid fa-book"></i>
            </div>
            <ul className="gt-list">
              <li><span>Documentation:</span></li>
              <li><Link to="/docs">Linux PrivEsc Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="gt-single-sideber-widgett mt-4">
        <h4>Related Topics</h4>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li><Link to="/web-exploitation">Web Exploitation</Link></li>
            </ul>
          </div>
        </div>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li><Link to="/buffer-overflow">Buffer Overflow</Link></li>
            </ul>
          </div>
        </div>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li><Link to="/cryptography">Cryptography</Link></li>
            </ul>
          </div>
        </div>
        <div className="gt-sideber-box">
          <div className="gt-box-item">
            <ul className="gt-list">
              <li><Link to="/real-writeups">Real Writeups</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 