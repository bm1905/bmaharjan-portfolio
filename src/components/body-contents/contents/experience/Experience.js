import React from 'react';
import { Element } from 'react-scroll';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <Element id="experience-destination" name="experience-destination">
            <div className="experience">
                <div className="container experience-contents">
                    <h2>EDUCATION &amp; EXPERIENCE</h2>
                    <hr className="white-line" />
                    <p>A visual representation of my education and work experience. </p>
                </div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2196f3', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
                        date='June 2019 - Present'
                        iconStyle={{ background: '#2196f3', color: '#fff' }}
                        icon={<i className='fa fa-briefcase icon'></i>} >
                        <ExperienceCard
                            title='Student Research Assistant'
                            employer='Louisiana State University - Shreveport'
                            lists={[
                                'Data Analysis/Research/Visualization (Tableau, R, Weka, Orange)',
                                'Mobile App Development - Frontend (ReactNative, Xamarin, Swift)',
                                'Node Server and API endpoints development (Express)'
                            ]} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#e4e4e4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #e4e4e4' }}
                        date="2019 - Present"
                        iconStyle={{ background: '#a71212', color: '#fff' }}
                        icon={<i className='fa fa-book icon'></i>} >
                        <ExperienceCard
                            title='Full Time Graduate Student'
                            employer='Louisiana State University - Shreveport'
                            lists={[
                                'MS Computer System Technology - Computer Science'
                            ]} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2196f3', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
                        date='2015 - 2020'
                        iconStyle={{ background: '#2196f3', color: '#fff' }}
                        icon={<i className='fa fa-book icon'></i>} >
                        <ExperienceCard
                            title='Full Time Undergraduate Student'
                            employer='Louisiana State University - Shreveport'
                            lists={[
                                'BS Computer Science - Software Development'
                            ]} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#e4e4e4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #e4e4e4' }}
                        date="2014 - 2015"
                        iconStyle={{ background: '#a71212', color: '#fff' }}
                        icon={<i className='fa fa-briefcase icon'></i>} >
                        <ExperienceCard
                            title='Motion Graphics Designer'
                            employer='TV Filmy - Kathmandu, Nepal'
                            lists={[
                                'Movie Editing',
                                'Creating 3D Animation Videos',
                                'Creating Motion Graphics',
                                'Creating Visual/Poster Advertisments'
                            ]} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2196f3', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
                        date='2012 - 2014'
                        iconStyle={{ background: '#2196f3', color: '#fff' }}
                        icon={<i className='fa fa-briefcase icon'></i>} >
                        <ExperienceCard
                            title='Visual Editor/Graphics Designer'
                            employer='Mountain Television - Kathmandu, Nepal'
                            lists={[
                                'Video Editing',
                                'Creating Motion Graphics',
                                'Creating Visual/Poster Advertisments'
                            ]} />
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </Element>
    )
};

export default Experience;