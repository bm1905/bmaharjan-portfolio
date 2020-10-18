import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Navbar from './navbar/Navbar';
import AboutMe from './about-me/AboutMe';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Project from './projects/Project';
import Honors from './honors/Honors';
import Footer from './footer/Footer';

class MainBody extends React.Component {
    render() {
        return (
            <StickyContainer>
                <Sticky topOffset={0}>
                    {({ style }) => (
                        <header className="sticky-navbar" style={style}>
                            <Navbar />
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