import React from 'react';
import { Element } from 'react-scroll'

const Footer = () => {
    return (
            <Element id="footer-destination" name="footer-destination">
                <div className="more-info">
                    <div className="container">
                        <div className="row more-info-text">
                            <div className="col-md-4 block">
                                <h4 className="title">WHAT'S HAPPENING</h4>
                                <p className="text">I am still working on my group project (ApartmentMe). Beside that I am
                                working on two other projects: Image-Recognition (Python) and Location based cross platform
                                app (React-Native). I am also preparing for JAVA SE Certification.
                            </p>
                            </div>
                            <div className="col-md-4 block">
                                <h4 className="title">MY INFO</h4>
                                <p className="text"><i className="fa fa-home icons"></i>Shreveport, LA</p>
                                <p className="text"><i className="fa fa-envelope icons"></i>bijay.maharjan5@gmail.com</p>
                                <p className="text"><i className="fa fa-phone icons"></i>(870)-949-9173</p>
                            </div>
                            <div className="col-md-4 block">
                                <h4 className="title">INTERESTED AREA</h4>
                                <ul className="text">
                                    <li>Ethical Hacking</li>
                                    <li>BlockChain &amp; Cryptocurrency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrightSection">
                    <div className="col-md-12 text-center">
                        <ul className="social-links">
                            <li><a href='https://www.facebook.com/bmaharjan.chelsea'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <i className="fa fa-facebook"></i>
                            </a>
                            </li>
                            <li><a href='https://www.instagram.com/m_reus111'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <i className="fa fa-instagram"></i>
                            </a>
                            </li>
                            <li><a href='https://www.linkedin.com/in/bijay-maharjan-10654b92'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <i className="fa fa-linkedin"></i>
                            </a>
                            </li>
                            <li><a href='https://github.com/bm1905'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <i className="fa fa-github"></i>
                            </a>
                            </li>
                            <li><a href='https://stackoverflow.com/users/8922935/bijay-maharjan'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <i className="fa fa-stack-overflow"></i>
                            </a>
                            </li>
                        </ul>
                        <p>&copy; Copyright Bijay Maharjan 2020</p>
                    </div>
                </div>
            </Element>
    );
}

export default Footer;