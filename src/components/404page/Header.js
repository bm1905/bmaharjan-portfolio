import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import * as constants from '../../constants/Constants';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar className="sticky-nav" light expand="md">
                <NavbarBrand className="main-name main-nav" href='https://www.bmaharjan.com'>
                    BM
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="other-nav" href='http://blogs.bmaharjan.com'>
                                My Blogs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="other-nav" href={`mailTo:${constants.EMAIL}`}>
                                Contact Me
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

export default Header;