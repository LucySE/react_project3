import React from 'react'

import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Dog Parking</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto">
                    <NavItem>
                        <Link to="/" className="nav-link" >
                        Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/join-now" className="nav-link">
                        Join Now
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/customer-portal" className="nav-link">
                        Customer Portal
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact-us" className="nav-link">
                        Contact Us
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dogparksearch" className="nav-link">
                        Dogpark Search
                        </Link>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
