import React from 'react';
import Collapsible from 'react-collapsible';
import { Element } from 'react-scroll'

const Honors = () => {
    return (
        <Element id="honors-destination" name="honors-destination">
            <div className="honor">
                <div className="container honor-contents">
                    <h2>HONORS &amp; CERTIFICATIONS</h2>
                    <hr className="white-line" />
                    <p>A brief overview of honors and certifications that I have achieved.</p>
                </div>
                <div className="container">
                    <Collapsible trigger="Honors">
                        <div>
                            <ul>
                                <li><a href='https://www.lsus.edu/news-and-events/lsu-shreveport-dean%E2%80%99s-and-chancellor%E2%80%99s-lists-announced-for-fall-2017-semester-'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    LSUS Chancellor’s List - Fall 2017
                                    </a>
                                </li>
                                <li><a href='https://www.lsus.edu/news-and-events/lsus-announces-chancellors-and-deans-lists-for-spring-2018'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    LSUS Chancellor’s List - Spring 2018
                                    </a>
                                </li>
                                <li><a href='https://www.lsus.edu/news-and-events/fall-2018-chancellors-list-and-deans-list'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    LSUS Chancellor’s List - Fall 2018
                                    </a>
                                </li>
                                <li><a href='https://www.lsus.edu/news-and-events/spring-2019-chancellors-list-and-deans-list'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    LSUS Dean’s List - Spring 2019
                                    </a>
                                </li>
                                <li><a href='https://www.lsus.edu/news-and-events/fall-2019-chancellors-and-deans-lists'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    LSUS Chancellor’s List - Fall 2019
                                    </a>
                                </li>
                                <br />
                                <li><a href='https://www.lsus.edu/news-and-events/lsus-announces-university-award-recipients-for-spring-2020'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    LSUS Outstanding Student of the year 2020
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Collapsible>

                    <Collapsible trigger="Certifications">
                        <div>
                            <ul>
                                <li>Still Pursuing</li>
                            </ul>
                        </div>
                    </Collapsible>
                </div>
            </div>
        </Element>
    )
};

export default Honors;