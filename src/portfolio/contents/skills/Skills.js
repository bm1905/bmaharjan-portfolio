import React from 'react';
import { Element } from 'react-scroll';
import * as constants from '../../../constants/Constants';
import ToolCard from './ToolCard';
import { getSkillIcons } from '../../../helpers';

const Skills = () => {

    const primarySkills = constants.PRIMARY_SKILLS.map((primarySkill, index) => {
        return (
            <ToolCard key={index}
                toolname={primarySkill.toolname}
                image={getSkillIcons[primarySkill.image]}
                bordercolor={primarySkill.borderColor} />
        );
    });

    const secondarySkills = constants.SECONDARY_SKILLS.map((secondarySkill, index) => {
        return (
            <ToolCard key={index}
                toolname={secondarySkill.toolname}
                image={getSkillIcons[secondarySkill.image]}
                bordercolor={secondarySkill.borderColor} />
        );
    });

    return (
        <Element id="skills-destination" name="skills-destination">
            <div className="skills">
                <div className="container skills-contents">
                    <h2>TECHNICAL SKILLS</h2>
                    <hr />
                    <p>A quick glance of my proficiency in each skills based on the length and frequency of the tools used. </p>

                    <hr />
                    <p><strong>Extensive Use</strong> - Frequently used for majority of the project.</p>
                    <div className="row" style={{ justifyContent: "center" }}>
                        {primarySkills}
                    </div>

                    <hr />
                    <p><strong>Exposure</strong> - Used for short period of time like for some class projects.</p>
                    <div className="row" style={{ justifyContent: "center" }}>
                        {secondarySkills}
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Skills;