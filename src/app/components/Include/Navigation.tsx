import * as React from 'react';

import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navigation extends React.Component<any, any> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/" className="logo pull-left">B<span>INO</span></NavbarBrand>
                        <Nav navbar className="pull-right">
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about-us">About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/portfolio">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/pricing">Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/team">Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </React.Fragment>
        );
    }
}

export default Navigation;