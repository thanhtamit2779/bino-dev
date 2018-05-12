import * as React from 'react';

import { NavLink } from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Nav>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-facebook" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-twitter" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-rss" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-google-plus" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-linkedin" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-skype" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-vimeo" aria-hidden="true"/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#"><i className="fa fa-tumblr" aria-hidden="true"/></NavLink>
                    </NavItem>     
                </Nav>
                <p>Kazi Erfan © All Rights Reserved </p>
            </footer>
        );
    }
}

export default Footer;