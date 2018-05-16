import * as React from 'react';

import { Container, Row, Col } from 'reactstrap';
class Introduce extends React.Component<any,any> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="introduce clearfix">
                <Container>
                    <Row>
                        <Col xs="6" sm="3">
                            <div className="item first">
                                <div className="image">
                                    <img
                                        src={require('./../../../assets/images/eye.png')}
                                        className="img-responsive"/>
                                </div>
                                <strong className="title">SLEEK DESIGN</strong>
                                <span className="line"></span>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting let. Lorem Ipsum has been the industry.</p>
                            </div>
                        </Col>
                        <Col xs="6" sm="3">
                            <div className="item">
                                <div className="image">
                                    <img
                                        src={require('./../../../assets/images/heart.png')}
                                        className="img-responsive"/>
                                </div>
                                <strong className="title">CLEAN CODE</strong>
                                <span className="line"></span>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting let. Lorem Ipsum has been the industry.</p>
                            </div>
                        </Col>
                        <Col xs="6" sm="3">
                            <div className="item">
                                <div className="image">
                                    <img
                                        src={require('./../../../assets/images/light.png')}
                                        className="img-responsive"/>
                                </div>
                                <strong className="title">CREATIVE IDEAS</strong>
                                <span className="line"></span>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting let. Lorem Ipsum has been the industry.</p>
                            </div>
                        </Col>
                        <Col xs="6" sm="3">
                            <div className="item">
                                <div className="image">
                                    <img
                                        src={require('./../../../assets/images/message.png')}
                                        className="img-responsive"/>
                                </div>
                                <strong className="title">FREE SUPPORT</strong>
                                <span className="line"></span>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting let. Lorem Ipsum has been the industry.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Introduce;