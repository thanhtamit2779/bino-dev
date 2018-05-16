import * as React from 'react';

import {Container} from 'reactstrap';

import {NavLink} from 'react-router-dom';

class Navigation extends React.Component < any,
any > {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <nav className="menu desktop">
                    <Container>
                        <a href="/" className="logo pull-left"><img src={ require('./../../../assets/images/logo.png') } title="BINO"/>
                        </a>
                        <ul className="pull-right">
                            <li className="active">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us">About us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing">Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/team">Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </Container>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navigation;