import React from 'react';
import { Element } from 'react-scroll';

import * as constants from 'src/constants/Constants';

const AboutMe = () => {
    return (
        <Element id="about-me-destination" name="about-me-destination">
            <div className="about-me">
                <div className="about-me-contents">
                    <img className="about-me-image" src={constants.MY_IMAGE} alt="about-me"></img>
                    <hr className="white-line" />
                    <h4>{constants.MY_NAME}</h4>
                    <h6>{constants.MY_TITLE}</h6>
                    <hr className="white-line" />
                    <div className="text-description">
                        <p>
                            <span className="firstLetter">{`${constants.FIRST_INTO.split(' ')[0]} `}</span>{constants.FIRST_INTO.split(' ').slice(1).join(' ')}
                        </p>
                        <p>
                            <span className="firstLetter">{`${constants.SECOND_INTRO.split(' ')[0]} `}</span>{constants.SECOND_INTRO.split(' ').slice(1).join(' ')}
                        </p>
                    </div>
                    <div>
                        <a href={constants.MY_RESUME} target="_blank" rel="noopener noreferrer"><button className="btn btn-click btn-form">RESUME</button></a>
                        <a href={`mailTo:${constants.EMAIL}`}><button className="btn btn-click btn-color btn-form">HIRE ME</button></a>
                        <a href={constants.BLOGS_LINK} target="_blank" rel="noopener noreferrer"><button className="btn btn-click btn-form">MY BLOGS</button></a>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe;