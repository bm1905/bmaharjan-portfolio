import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import NavBar from '../navbar/NavBar';
import AboutMe from '../contents/about-me/AboutMe';
import Skills from '../contents/skills/Skills';
import Experience from '../contents/experience/Experience';
import Project from '../contents/projects/Project';
import Honors from '../contents/honors/Honors';
import Footer from '../../footer/Footer';

class MainBody extends React.Component {
    render() {
        return (
            <StickyContainer>
                <Sticky topOffset={0}>
                    {({ style }) => (
                        <header className="sticky-navbar" style={style}>
                            <NavBar />
                        </header>
                    )}
                </Sticky>
                <AboutMe />
                <Skills />
                <Experience />
                <Project />
                <Honors />
                <Footer />
            </StickyContainer>
        )
    }
};

export default MainBody;