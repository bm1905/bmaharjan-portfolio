import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import NavBar from 'src/components/body-contents/navbar/NavBar';
import AboutMe from 'src/components/body-contents/contents/about-me/AboutMe';
import Skills from 'src/components/body-contents/contents/skills/Skills';
import Experience from 'src/components/body-contents/contents/experience/Experience';
import Project from 'src/components/body-contents/contents/projects/Project';
import Honors from 'src/components/body-contents/contents/honors/Honors';
import Footer from 'src/components/footer/Footer';

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