import React from 'react';

const MatchTabs = ({ activeTab, onTabChange, tabs }) => {
  return (
    <ul className="nav">
      {tabs.map(tab => (
        <li className="nav-item" key={tab.key}>
          <button
            className={`nav-link${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MatchTabs; 