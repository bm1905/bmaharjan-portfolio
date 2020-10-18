import React from 'react';
import { Element } from 'react-scroll';
import * as constants from '../../../constants/Constants';

const Footer = () => {

    const socialIcons = constants.SOCIAL_ICONS.map((socialIcon, index) => {
        return (
            <li key={index}>
                <a href={socialIcon.link} target='_blank' rel='noopener noreferrer'>
                    <i className={`fa fa-${socialIcon.iconName}`}></i>
                </a>
            </li>
        );
    });

    return (
        <Element id="footer-destination" name="footer-destination">
            <div className="more-info">
                <div className="container">
                    <div className="row more-info-text">
                        <div className="col-md-4 block">
                            <h4 className="title">WHAT'S HAPPENING</h4>
                            <p className="text">{constants.FOOTER_INTRO}</p>
                        </div>
                        <div className="col-md-4 block">
                            <h4 className="title">MY INFO</h4>
                            <p className="text"><i className="fa fa-home icons"></i>{constants.CONTACT[0] || 'N/A'}</p>
                            <p className="text"><i className="fa fa-envelope icons"></i>{constants.CONTACT[1] || 'N/A'}</p>
                            <p className="text"><i className="fa fa-phone icons"></i>{constants.CONTACT[2] || 'N/A'}</p>
                        </div>
                        <div className="col-md-4 block">
                            <h4 className="title">INTERESTED AREA</h4>
                            <ul className="text">
                                <li>{constants.INTERESTED_AREA[0] || 'N/A'}</li>
                                <li>{constants.INTERESTED_AREA[1] || 'N/A'}</li>
                                <li>{constants.INTERESTED_AREA[2] || 'N/A'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrightSection">
                <div className="col-md-12 text-center">
                    <ul className="social-links">
                        {socialIcons}
                    </ul>
                    <p>&copy; {constants.COPYRIGHT}</p>
                </div>
            </div>
        </Element>
    );
}

export default Footer;