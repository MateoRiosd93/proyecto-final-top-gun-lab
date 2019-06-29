import React from "react";

import "../styles/Footer.css";
import "../fonts/style.css";
import clutch from "../assets/Clutch.png";

function Footer() {
  return (
    <div className="container-footer">
      <div className="container-info">
        <div className="info">
          <h3 className="title-info">LOCATIONS</h3>
          <p className="text-info">United States</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/locations/ukraine/">Ukraine
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/locations/colombia/">Colombia
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/locations/poland/">Poland
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/locations/vietnam/">Vietnam
          </a>
        </div>

        <div className="info">
          <h3 className="title-info">SERVICES</h3>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/services/custom-software-development/">Custom Software Development
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/services/intelligent-automation-services-rpa/">Automation Services
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/services/software-qa-and-testing/">Software QA{` & `}Testing
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/services/microsoft-services/">Microsoft Services
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/services/data-analytics-services/">Data Analytics Services
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/services/managed-it-services/">Managed IT Services
          </a>
        </div>
        <div className="info">
          <h3 className="title-info">RESOURCES</h3>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/blog/">Blog
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/white-papers/">White Papers
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-link"
            href="https://www.teaminternational.com/case-studies/">Case Studies
          </a>
          <a
            className="text-info-link"
            href="https://www.teaminternational.com/press-room/">News
          </a>
        </div>
        <div className="info">
          <h3 className="title-info">CONTACT US</h3>
          <p className="text-contact-bold">US Headquarters</p>
          <p className="contact-num">{`+1 (407) 708-5790`}</p>
          <p className="text-contact">sales@teaminternational.com</p>
          <p className="text-contact">1145 TownPark Avenue Suite 2201</p>
          <p className="text-contact-mg">Lake Mary, FL 32746</p>

          <p className="text-contact-bold">Business Development</p>
          <p className="contact-num">{`+1 (407) 708-5617`}</p>
          <p className="text-contact">Denmark +45 (29) 99 68 60</p>
          <p className="text-contact">United Kingdom +44 (0) 7799 624 384</p>
          <p className="text-contact">Germany +49 (17) 640 725 869</p>
        </div>
        <div className="container-lenguage-follow">
          <div>
            <h3 className="title-info">LENGUAGES</h3>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="text-info-link"
              href="https://www.teaminternational.com/">English
            </a>
          </div>
          <div className="container-follow">
            <h3 className="title-info">FOLLOW US</h3>
            <div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="icon-follow"
                href="https://www.linkedin.com/company/team-international/"
              >
                <span className="incon-follow icon-linkedin2" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="icon-follow"
                href="https://www.facebook.com/teamintl"
              >
                <span className="incon-follow icon-facebook" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="icon-follow"
                href="https://twitter.com/team_intl"
              >
                <span className="icon-twitter" />
              </a>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://clutch.co/profile/team-international?utm_source=widget&utm_medium=widget_2&utm_campaign=widget&utm_content=logo"
            >
              <img
                className="clutch-img"
                src={clutch}
                alt="Clutch TEAM Internacional"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container-copyright-img">
        <div className="container-copyright">
          <p className="text-info">
            Copyright © TEAM International Services Inc. All Rights Reserved.
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-privacy"
            href="https://www.teaminternational.com/sitemap/">Sitemap

          </a>
          <span className="barra"> | </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-info-privacy"
            href="https://www.teaminternational.com/privacy-policy/">Privacy Policy
          </a>
        </div>
        <div className="container-button">
          <button className="button-footer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;