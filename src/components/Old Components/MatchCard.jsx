import React from 'react';
import { Link } from 'react-router-dom';

const MatchCard = ({ match, showWatchNow = true, className = "" }) => {
  return (
    <div className={`gt-trending-match-items ${className}`}>
      <div className="gt-match-logo">
        <img src={match.teams[0]} alt="team1" className="gt-match-thumb" />
        <img src="/assets/img/home-2/match/vs.png" alt="vs" />
        <img src={match.teams[1]} alt="team2" className="gt-match-thumb" />
      </div>
      <div className="gt-match-content">
        <ul className="gt-date-list">
          <li>
            <i className="fa-light fa-calendar"></i> {match.date}
          </li>
          <li>
            <i className="fa-regular fa-clock"></i> {match.time}
          </li>
        </ul>
        <h3>
          <Link to="/match-details">{match.title}</Link>
        </h3>
        <p>{match.desc}</p>
      </div>
      {showWatchNow && (
        <div className="gt-watch-now-items">
          <span>Watch live on</span>
          <ul className="gt-watch-now-list">
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i> you tube
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-discord"></i> discord
              </a>
            </li>
            <li>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitch"></i> twitch
              </a>
              <a href="#">
                <i className="fa-solid fa-eyes"></i> GeForce
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MatchCard; 