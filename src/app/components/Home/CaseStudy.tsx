
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Container
} from 'reactstrap';

import { Carousel } from 'react-responsive-carousel';

class Work extends React.Component < any, any > {

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
            <section className="case-study clearfix">
                <Container>
                    <div className="content-top">
                        <strong className="title common-title">CASE STUDY</strong>
                        <p className="description common-description text-center">A brief story about how this process works, keep an eye till the end.</p>
                        <span className="line common-line"></span>
                    </div>
                    <div className="content-bottom clearfix">
                        <div className="text pull-left">
                            <Carousel showThumbs={false} showIndicators={true} showStatus={false} showArrows={false}>
                                <div className="item">
                                    <div className="image">
                                        <img
                                            src={require('./../../../assets/images/case-study-light.png')}
                                            className="img-fluid"/>
                                    </div>
                                    <strong className="title">aCCUMULATE CREATIVE IDEAS</strong>
                                    <span className="line"></span>
                                    <div className="description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.</p>
                                    </div>
                                    <NavLink className="btn btn-default" to="#">read more</NavLink>
                                </div>
                                <div className="item">
                                    <div className="image">
                                        <img
                                            src={require('./../../../assets/images/case-study-light.png')}
                                            className="img-fluid"/>
                                    </div>
                                    <strong className="title">aCCUMULATE CREATIVE IDEAS</strong>
                                    <span className="line"></span>
                                    <div className="description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.</p>
                                    </div>
                                    <NavLink className="btn btn-default" to="#">read more</NavLink>
                                </div>
                                <div className="item">
                                    <div className="image">
                                        <img
                                            src={require('./../../../assets/images/case-study-light.png')}
                                            className="img-fluid"/>
                                    </div>
                                    <strong className="title">aCCUMULATE CREATIVE IDEAS</strong>
                                    <span className="line"></span>
                                    <div className="description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.</p>
                                    </div>
                                    <NavLink className="btn btn-default" to="#">read more</NavLink>
                                </div>
                            </Carousel>
                        </div>
                        <div className="image pull-right">
                            <img src={require('./../../../assets/images/case-study.png')} className="pull-right"/>
                        </div>    
                    </div>
                </Container>
            </section>
        );
    }
}

export default Work;