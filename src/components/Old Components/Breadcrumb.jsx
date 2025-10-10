import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, items = [] }) => {
  return (
    <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url('/assets/img/breadcrumb.png')` }}>
      <div className="gt-left-shape">
        <img src="/assets/img/shape-1.png" alt="img" />
      </div>
      <div className="gt-right-shape">
        <img src="/assets/img/shape-2.png" alt="img" />
      </div>
      <div className="gt-blur-shape">
        <img src="/assets/img/breadcrumb-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="gt-page-heading">
          <div className="gt-breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">{title}</h1>
          </div>
          <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <i className="fa-solid fa-house"></i>
            </li>
            <li>
              <Link to="/">home :</Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className={item.isActive ? 'color' : ''}>
                {item.link ? (
                  <Link to={item.link}>{item.text}</Link>
                ) : (
                  item.text
                )}
                {index < items.length - 1 && ': '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb; 