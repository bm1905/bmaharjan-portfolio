import React from 'react';
import { Element } from 'react-scroll'
import { ProductCard } from 'react-ui-cards';
import PopUpModal from './PopUpModal';
import * as constants from '../../../../constants/Constants';

const Project = () => {

    const projects = constants.PROJECTS.map((project, index) => {
        return (
            <div className="col-lg-4 col-md-6 portfolio-each-card" key={index}>
                <ProductCard
                    photos={project.photos}
                    price={project.status}
                    productName={project.name}
                    description={<span className="portfolio-text">{project.description}</span>}
                    buttonText={project.buttonText}
                    url={project.buttonLink}
                />
                <PopUpModal
                    buttonText={project.popup.buttonText}
                    projectName={project.popup.name}
                    projectDescription={project.popup.description}
                    toolsUsed={project.popup.tools}
                    website={project.popup.link || ''}
                />
            </div>
        );
    });

    return (
        <Element id="portfolio-destination" name="portfolio-destination">
            <div className='portfolio'>
                <div className="container portfolio-contents">
                    <h2>PROJECTS &amp; WORKS</h2>
                    <hr />
                    <p>A brief overview of projects that I have been working on.</p>

                    <div className="container">
                        <div className="row portfolio-cards">
                            {projects}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Project;