import React from 'react';

import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="container-footer">
            <div className="container-info">
                <div className="info">
                    <h3 className="title-info">LOCATIONS</h3>
                    <p className="text-info">United States</p>
                    <p className="text-info">Ukraine</p>
                    <p className="text-info">Colombia</p>
                    <p className="text-info">Poland</p>
                    <p className="text-info">Vietnam</p>
                </div>
                <div className="info">
                    <h3 className="title-info">SERVICES</h3>
                    <p className="text-info">Custom Software Development</p>
                    <p className="text-info">Automation Services</p>
                    <p className="text-info">Software QA{` & `}Testing</p>
                    <p className="text-info">Microsoft Services</p>
                    <p className="text-info">Data Analytics Services</p>
                    <p className="text-info">Managed IT Services</p>
                </div>
                <div className="info">
                    <h3 className="title-info">RESOURCES</h3>
                    <p className="text-info">Blog</p>
                    <p className="text-info">White Papers</p>
                    <p className="text-info">Case Studies</p>
                    <p className="text-info">News</p>
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
                    <div >
                        <h3 className="title-info">LENGUAGES</h3>
                        <p className="text-info">English</p>
                    </div>
                    <div className="container-follow">
                        <h3 className="title-info">FOLLOW US</h3>
                        <div>
                            <i>LinkedIn</i>
                            <i>Faceboock</i>
                            <i>Twitter</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-copyright-img">
                <div className="container-copyright">
                    <p className="text-info">Copyright © TEAM International Services Inc. All Rights Reserved.</p>
                    <h3 className="text-info-privacy">Sitemap | Privacy Policy</h3>
                </div>
                <div className="container-button">
                    <button className="button-footer"></button>
                </div>
            </div>
        </div>
    )
}
