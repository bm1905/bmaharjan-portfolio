import React from 'react';
import { Element } from 'react-scroll';
import * as constants from '../../../../constants/Constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ExperienceCard from './ExperienceCard';

const Experience = () => {

    const experiences = constants.EXPERIENCE.map((experience, index) => {
        return (
            experience.work ?
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2196f3', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
                    date={experience.date}
                    iconStyle={{ background: '#2196f3', color: '#fff' }}
                    icon={<i className='fa fa-briefcase icon'></i>} >
                    <ExperienceCard
                        title={experience.title}
                        employer={experience.employer}
                        lists={experience.lists} />
                </VerticalTimelineElement>
                :
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e4e4e4', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e4e4e4' }}
                    date={experience.date}
                    iconStyle={{ background: '#a71212', color: '#fff' }}
                    icon={<i className='fa fa-book icon'></i>} >
                    <ExperienceCard
                        title={experience.title}
                        employer={experience.employer}
                        lists={experience.lists} />
                </VerticalTimelineElement>
        )
    });

    return (
        <Element id="experience-destination" name="experience-destination">
            <div className="experience">
                <div className="container experience-contents">
                    <h2>EDUCATION &amp; EXPERIENCE</h2>
                    <hr className="white-line" />
                    <p>A visual representation of my education and work experience. </p>
                </div>
                <VerticalTimeline>
                    {experiences}
                </VerticalTimeline>
            </div>
        </Element>
    )
};

export default Experience;