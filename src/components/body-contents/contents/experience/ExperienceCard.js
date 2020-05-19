import React from 'react';

const ExperienceCard = ({ title, employer, lists }) => {

    const points = lists.map((item, index) => {
        return (
            <li key={index}><em>{item}</em></li>
        )
    });

    return (
        <div className="experience-block">
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{employer}</h4>
            <ul>
                {points}
            </ul>
        </div>
    )
};

export default ExperienceCard;