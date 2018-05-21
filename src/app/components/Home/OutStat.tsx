import * as React from 'react';

import {Container, Nav, NavItem, NavLink} from 'reactstrap';

class OutStat extends React.Component < any,
any > {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="out-stat clearfix">
                <Container>
                    <Nav>
                        <NavItem className="item">
                            <NavLink href="/"><img className="img-responsive" src={ require('./../../../assets/images/stat-heart.png') }/></NavLink>
                            <span className="count">3891</span>
                            <span className="title">User Favourites</span>
                        </NavItem>
                        <NavItem className="item">
                            <NavLink href="/"><img className="img-responsive" src={ require('./../../../assets/images/stat-tag.png') }/></NavLink>
                            <span className="count">3891</span>
                            <span className="title">User Favourites</span>
                        </NavItem>
                        <NavItem className="item">
                            <NavLink href="/"><img className="img-responsive" src={ require('./../../../assets/images/stat-like.png') }/></NavLink>
                            <span className="count">3891</span>
                            <span className="title">User Favourites</span>
                        </NavItem>
                        <NavItem className="item">
                            <NavLink href="/"><img className="img-responsive" src={ require('./../../../assets/images/stat-star.png') }/></NavLink>
                            <span className="count">3891</span>
                            <span className="title">User Favourites</span>
                        </NavItem>
                        <NavItem className="item">
                            <NavLink href="/"><img className="img-responsive" src={ require('./../../../assets/images/stat-tag-2.png') }/></NavLink>
                            <span className="count">3891</span>
                            <span className="title">User Favourites</span>
                        </NavItem>
                    </Nav>
                </Container>
            </section>
        );
    }
}

export default OutStat;