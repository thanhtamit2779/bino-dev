import * as React from 'react';
import { NavLink } from 'react-router-dom';

import {Container, Row, Col} from 'reactstrap';

class About extends React.Component<any,any> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="about clearfix">
                <Container>
                    <Row>
                        <Col xs="12" sm="6">
                            <img src={ require('./../../../assets/images/monitor.png') } className="img-responsive" />
                        </Col>
                        <Col xs="12" sm="6">
                            <strong className="title">CLEAN CODE</strong>
                            <div className="description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip sum has been the industry's standard dummy text ever since the 1500s, when an unk- nown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <NavLink className="btn btn-default" to="#">BROWSE OUR WORK</NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;