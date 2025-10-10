import React from 'react';
import { Link } from 'react-router-dom';

const LinuxPrivEscDetails = () => {
  return (
    <div className="gt-details-post">
      <div className="gt-detials-image">
        <img src="/assets/img/inner-page/match-details/details-1.jpg" alt="Linux PrivEsc" />
        <div className="gt-image-item">
          <div className="gt-small-image">
            <img src="/assets/img/inner-page/match-details/small-1.jpg" alt="Kernel Exploit" />
          </div>
          <div className="gt-logo-image">
            <img src="/assets/img/inner-page/match-details/logo.png" alt="Linux Logo" />
          </div>
          <div className="gt-small-image">
            <img src="/assets/img/inner-page/match-details/small-2.jpg" alt="SUID Exploit" />
          </div>
        </div>
      </div>
      
      <ul className="gt-date-list">
        <li>
          <i className="fa-regular fa-calendar"></i>
          Updated: 30 May, 2024
        </li>
        <li>
          <i className="fa-regular fa-clock"></i>
          Difficulty: Intermediate
        </li>
      </ul>

      <div className="gt-details-content">
        <div className="gt-watch-now-items">
          <span>Practice on</span>
          <ul className="gt-watch-now-list">
            <li>
              <a href="#">
                <i className="fa-brands fa-docker"></i>
                Docker Lab
              </a>
              <a href="#">
                <i className="fa-solid fa-terminal"></i>
                Virtual Machine
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-cloud"></i>
                Cloud Lab
              </a>
              <a href="#">
                <i className="fa-solid fa-server"></i>
                Remote Server
              </a>
            </li>
          </ul>
        </div>

        <h3>Linux Privilege Escalation Techniques</h3>
        <p>
          Linux privilege escalation is a critical skill for penetration testers and security researchers. 
          This comprehensive guide covers various techniques to elevate privileges from a low-privileged user 
          to root access on Linux systems. From kernel exploits to misconfigured permissions, learn the 
          most effective methods used in real-world scenarios.
        </p>

        <h4>Common Privilege Escalation Vectors</h4>
        <p>
          Understanding the common attack vectors is essential for both offensive and defensive security. 
          These techniques are frequently encountered in CTF challenges, OSCP exams, and real-world 
          penetration testing engagements.
        </p>

        <ul className="gt-list">
          <li>
            <i className="fa-solid fa-check"></i>
            Kernel Exploits - Exploiting vulnerabilities in the Linux kernel
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            SUID/SGID Binaries - Exploiting misconfigured file permissions
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Cron Jobs - Leveraging scheduled tasks for privilege escalation
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Environment Variables - Exploiting PATH and other environment variables
          </li>
        </ul>

        <div className="row g-4 pb-3">
          <div className="col-lg-6">
            <div className="thumb">
              <img src="/assets/img/inner-page/match-details/details-2.jpg" alt="Kernel Exploit" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumb">
              <img src="/assets/img/inner-page/match-details/details-3.jpg" alt="SUID Exploit" />
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>

        <h4>Practical Exercises</h4>
        <p>
          Hands-on practice is crucial for mastering privilege escalation techniques. Our lab environment 
          provides realistic scenarios that simulate common misconfigurations and vulnerabilities found 
          in production systems. Each exercise includes detailed walkthroughs and multiple solution paths.
        </p>

        <div className="gt-match-details-box">
          <div className="gt-list-item">
            <h4>
              <span>Basic</span> Techniques
            </h4>
            <ul className="gt-list">
              <li>
                <i className="fa-solid fa-check"></i>
                SUID Binary Exploitation
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                PATH Variable Manipulation
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Cron Job Exploitation
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Sudo Misconfiguration
              </li>
            </ul>
          </div>
          <div className="gt-image-item">
            <div className="gt-small-image">
              <img src="/assets/img/inner-page/match-details/small-3.jpg" alt="Basic Techniques" />
            </div>
            <div className="gt-logo-image">
              <img src="/assets/img/inner-page/match-details/logo-2.png" alt="Linux Security" />
            </div>
            <div className="gt-small-image">
              <img src="/assets/img/inner-page/match-details/small-4.jpg" alt="Advanced Techniques" />
            </div>
          </div>
          <div className="gt-list-item">
            <h4>
              <span>Advanced</span> Techniques
            </h4>
            <ul className="gt-list">
              <li>
                <i className="fa-solid fa-check"></i>
                Kernel Exploit Development
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Race Condition Exploits
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Memory Corruption
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                Container Escape Techniques
              </li>
            </ul>
          </div>
        </div>

        <p>
          Each technique is thoroughly explained with practical examples, common pitfalls, and 
          defensive measures. The lab environment is designed to provide a safe learning space 
          where you can experiment with these techniques without affecting production systems.
        </p>

        <div className="gt-comments-area">
          <div className="gt-comments-heading">
            <h4>Student Reviews <span>(02)</span></h4>
          </div>
          <div className="gt-blog-single-comment d-flex gap-4 pt-4">
            <div className="image">
              <img src="/assets/img/inner-page/match-details/comment-1.jpg" alt="Student" />
            </div>
            <div className="gt-content">
              <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div className="con">
                  <h5><Link to="/news-details">Alex Chen</Link></h5>
                  <ul className="gt-date-list">
                    <li>
                      <i className="fa-regular fa-calendar"></i>
                      30 May, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      OSCP Student
                    </li>
                  </ul>
                </div>
                <Link to="/news-details" className="reply">
                  <i className="fa-solid fa-reply"></i> Reply
                </Link>
              </div>
              <p className="mt-3 mb-4">
                Excellent coverage of Linux privilege escalation techniques! The practical exercises 
                helped me understand the concepts much better than theory alone. Highly recommended 
                for anyone preparing for OSCP or similar certifications.
              </p>
            </div>
          </div>
          <div className="gt-blog-single-comment d-flex gap-4 pt-4 gt-style-2">
            <div className="image">
              <img src="/assets/img/inner-page/match-details/comment-2.jpg" alt="Student" />
            </div>
            <div className="gt-content">
              <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div className="con">
                  <h5><Link to="/news-details">Sarah Johnson</Link></h5>
                  <ul className="gt-date-list">
                    <li>
                      <i className="fa-regular fa-calendar"></i>
                      30 May, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      Security Researcher
                    </li>
                  </ul>
                </div>
                <Link to="/news-details" className="reply">
                  <i className="fa-solid fa-reply"></i> Reply
                </Link>
              </div>
              <p className="mt-3">
                The lab environment is well-designed and the step-by-step walkthroughs are very helpful. 
                I particularly liked the section on kernel exploits and how to identify vulnerable systems.
              </p>
            </div>
          </div>
        </div>

        <div className="gt-comment-form-wrap mt-5">
          <h4>Leave a Review</h4>
          <p>Share your experience with our Linux PrivEsc course. Your feedback helps us improve!</p>
          <form action="#" id="contact-form" method="POST">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-clt">
                  <span>Your Name</span>
                  <input type="text" name="name" id="name" placeholder="Your Name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <span>Your Email</span>
                  <input type="text" name="email" id="email6" placeholder="Your Email" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <span>Your Review</span>
                  <textarea name="message" id="message" placeholder="Share your experience with the course"></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <button type="submit" className="gt-theme-btn">
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LinuxPrivEscDetails; 