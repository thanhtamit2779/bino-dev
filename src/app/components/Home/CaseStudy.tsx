
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Container
} from 'reactstrap';

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
                    <div className="text">
                        <strong className="title">CASE STUDY</strong>
                        <p className="descirption text-center">A brief story about how this process works, keep an eye till the end.</p>
                        <span className="line"></span>
                    </div>
                    <div className="content">
                        <div className="carousel pull-left">
                            <div className="item">
                                <div className="image">
                                    <img
                                        src={require('./../../../assets/images/light.png')}
                                        className="img-responsive"/>
                                </div>
                                <strong className="title">aCCUMULATE CREATIVE IDEAS</strong>
                                <div className="description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.</p>
                                </div>
                                <NavLink className="btn btn-default" to="#">read more</NavLink>
                            </div>
                        </div>
                        <img src={require('./../../../assets/images/case-study.png')} className="pull-right"/>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Work;