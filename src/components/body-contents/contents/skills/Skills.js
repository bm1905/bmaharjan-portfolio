import React from 'react';
import { Element } from 'react-scroll';

import Java from '../../../../images/tools/JAVA.png';
import Csharp from '../../../../images/tools/Csharp.png';
import JavaScript from '../../../../images/tools/JavaScript.png';
import MongoDB from '../../../../images/tools/MongoDB.png';
import MySQL from '../../../../images/tools/MySQL.png';
import ReactLogo from '../../../../images/tools/React.png';
import Express from '../../../../images/tools/Express.png';
import Xamarin from '../../../../images/tools/Xamarin.png';
import Git from '../../../../images/tools/Git.png';
import Photoshop from '../../../../images/tools/Photoshop.png';
import Python from '../../../../images/tools/Python.png';
import CPlusPlus from '../../../../images/tools/CPlusPlus.png';
import Angular from '../../../../images/tools/Angular.png';
import Swift from '../../../../images/tools/Swift.png';
import SubVersion from '../../../../images/tools/SVN.png';
import Docker from '../../../../images/tools/Docker.png';
import TravisCI from '../../../../images/tools/TravisCI.png';

import ToolCard from './ToolCard';

const Skills = () => {
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
                        <ToolCard bordercolor='primary' toolname='JAVA' image={Java} />
                        <ToolCard bordercolor='primary' toolname='C#' image={Csharp} />
                        <ToolCard bordercolor='primary' toolname='JavaScript' image={JavaScript} />
                        <ToolCard bordercolor='success' toolname='MongoDB' image={MongoDB} />
                        <ToolCard bordercolor='success' toolname='MySQL' image={MySQL} />
                        <ToolCard bordercolor='danger' toolname='React.js' image={ReactLogo} />
                        <ToolCard bordercolor='danger' toolname='Express.js' image={Express} />
                        <ToolCard bordercolor='warning' toolname='React Native' image={ReactLogo} />
                        <ToolCard bordercolor='warning' toolname='Xamarin' image={Xamarin} />
                        <ToolCard bordercolor='info' toolname='Git' image={Git} />
                        <ToolCard bordercolor='info' toolname='Docker' image={Docker} />
                        <ToolCard bordercolor='info' toolname='TravisCI' image={TravisCI} />
                        <ToolCard bordercolor='dark' toolname='Photoshop' image={Photoshop} />
                    </div>

                    <hr />
                    <p><strong>Exposure</strong> - Used for short period of time like for some class projects.</p>
                    <div className="row" style={{ justifyContent: "center" }}>
                        <ToolCard bordercolor='primary' toolname='Python' image={Python} />
                        <ToolCard bordercolor='primary' toolname='C++' image={CPlusPlus} />
                        <ToolCard bordercolor='danger' toolname='Angular' image={Angular} />
                        <ToolCard bordercolor='warning' toolname='Swift' image={Swift} />
                        <ToolCard bordercolor='info' toolname='Subversion' image={SubVersion} />
                    </div>

                </div>
            </div>
        </Element>
    )
};

export default Skills;