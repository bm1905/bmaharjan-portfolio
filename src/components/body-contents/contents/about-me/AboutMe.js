import React from 'react';
import { Element } from 'react-scroll';

import Picture from '../../../../images/profile-picture/circle.jpg';
import Resume from '../../../../images/resume/Resume_Maharjan_Bijay.pdf'

const AboutMe = () => {
    return (
        <Element id="about-me-destination" name="about-me-destination">
            <div className="about-me">
                <div className="about-me-contents">
                    <img className="about-me-image" src={Picture} alt="about-me"></img>
                    <hr className="white-line" />
                    <h4>Bijay Maharjan</h4>
                    <h6>Full-Stack Developer</h6>
                    <hr className="white-line" />
                    <div className="text-description">
                        <p>
                            <span className="firstLetter">Possessing</span> the required knowledge for a full-stack development
                            with an emphasis on Web and Mobile Application Development. Extensive use of JavaScript for frontend (React.js,
                            Angular.js) and backend (Express.js), comfortable using both relational (MySQL) as well as
                            non-relational (MongoDB) database, version control system like Git or SVN and familiar with CI/CD
                            pipeline.
                        </p>
                        <p>
                            <span className="firstLetter">Experienced</span> graphics designer with a demonstrated history of
                            working in the 3D and VFX industry, aiming to blend my designing and programming skills to create
                            beautiful and interactive Mobile and Web Applications.
                        </p>
                    </div>
                    <div>
                        <a href={Resume} target="_blank" rel="noopener noreferrer"><button className="btn btn-click btn-form">RESUME</button></a>
                        <a href="mailTo:bijay.maharjan5@gmail.com"><button className="btn btn-click btn-color btn-form">HIRE ME</button></a>
                        <a href="http://blogs.bmaharjan.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn-click btn-form">MY BLOGS</button></a>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe;