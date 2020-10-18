import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import * as constants from '../../../constants/Constants';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const mainPostion = document.querySelector('#main-destination');
    const aboutMePostion = document.querySelector('#about-me-destination');
    const skillsPostion = document.querySelector('#skills-destination');
    const experiencePostion = document.querySelector('#experience-destination');
    const portfolioPostion = document.querySelector('#portfolio-destination');
    const honorPostion = document.querySelector('#honors-destination');
    const footerPostion = document.querySelector('#footer-destination');


    return (
        <div>
            <Navbar className="sticky-nav" light expand="md">
                <NavbarBrand className="main-name main-nav"
                    onClick={() => mainPostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                >
                    BM
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="other-nav"
                                onClick={() => aboutMePostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                            >
                                About Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="other-nav"
                                onClick={() => skillsPostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                            >
                                Skills
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="other-nav"
                                onClick={() => experiencePostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                            >
                                Timeline
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="other-nav">
                                Accomplishments
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="other-nav-drop"
                                    onClick={() => portfolioPostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                                >
                                    Projects
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="other-nav-drop"
                                    onClick={() => honorPostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                                >
                                    Awards &amp; Certifications
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink className="other-nav"
                                onClick={() => footerPostion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' })}
                            >
                                Contacts
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="other-nav"
                                href={constants.MY_RESUME} target='_blank'
                            >Resume</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;