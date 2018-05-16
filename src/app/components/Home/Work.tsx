import * as React from 'react';

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg,
    CardBody
} from 'reactstrap';

class Work extends React.Component < any,
any > {

    constructor(props : any) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab : any) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
    }

    render() {
        return (
            <section className="works clearfix">
                <div className="text">
                    <strong className="title common-title">RECENT WORKS</strong>
                    <p className="description text-center common-description">It has survived not only five centuries,
                        but also the leap scrambled it to make a type.</p>
                    <span className="common-line"></span>
                    <Nav tabs className="">
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                this.toggle('1');
                            }}>
                                All
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                this.toggle('2');
                            }}>
                                PRINT DESIGN
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                this.toggle('3');
                            }}>
                                ANIMATION
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                this.toggle('2');
                            }}>
                                PRINT DESIGN
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                this.toggle('3');
                            }}>
                                ANIMATION
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div className="list">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio-2.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio-3.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio-4.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio-5.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio-6.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                                <Card className="item">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={ require('./../../../assets/images/portfolio-7.png') }
                                        alt="portfolio"/>
                                    <CardBody className="d-none">
                                        <span className="line"></span>
                                        <p className="title">T-SHIRT DESIGN</p>
                                        <span>art / t-shirt</span>
                                    </CardBody>
                                </Card>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </section>
        );
    }
}

export default Work;