import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>MetaLogic Software Private Limited</h3>
          <p>L:Saptakhel, Lalitpur (Head office)</p>
          <p>P:+977 9851353599</p>
          <p>M:info@metalogic.com.np</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/partnership">Partnership</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a >Custom Software Development</a></li>
            <li><a>Web Development</a></li>
            <li><a>Mobile App Development</a></li>
            <li><a >Cloud Computing Services</a></li>
            <li><a >Quality Assurance and Testing</a></li>
            <li><a>UI/UX Designing</a></li>
            <li><a>Maintenance and Support</a></li>
            <li><a >DevOps</a></li>
            <li><a>Blockchain Solutions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Join</h4>
          <ul>
            <li><a href="/careers">Careers at MetaLogic</a></li>
            <li><a href="/internships">Internships</a></li>
            <li><a href="/social-media">Join us on Social Medias</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2024 MetaLogic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
