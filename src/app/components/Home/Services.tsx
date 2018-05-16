import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Services extends React.Component<any,any> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="services clearfix">
                <Carousel showThumbs={false} showIndicators={true} showStatus={false} showArrows={false}>
                    <div className="item">
                        <div className="text pull-left">
                            <strong className="title">OUR SERVICES</strong>
                            <ul>
                                <li className="clearfix">
                                    <strong className="title">WEB DESIGN</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-desktop.png') } className="img-responsive"/></div>
                                </li>
                                <li className="clearfix">
                                    <strong className="title">PRINT DESIGN</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-print.png') } className="img-responsive"/></div>
                                </li>
                                <li className="clearfix">
                                    <strong className="title">PHOTOGRAPHY</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-photo.png') } className="img-responsive"/></div>
                                </li>
                            </ul>
                        </div>
                        <div className="image pull-right">
                            <img src={ require('./../../../assets/images/services.png') } className="img-responsive"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text pull-left">
                            <strong className="title">OUR SERVICES</strong>
                            <ul>
                                <li className="clearfix">
                                    <strong className="title">WEB DESIGN</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-desktop.png') } className="img-responsive"/></div>
                                </li>
                                <li className="clearfix">
                                    <strong className="title">PRINT DESIGN</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-print.png') } className="img-responsive"/></div>
                                </li>
                                <li className="clearfix">
                                    <strong className="title">PHOTOGRAPHY</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-photo.png') } className="img-responsive"/></div>
                                </li>
                            </ul>
                        </div>
                        <div className="image pull-right">
                            <img src={ require('./../../../assets/images/services.png') } className="img-responsive"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text pull-left">
                            <strong className="title">OUR SERVICES</strong>
                            <ul>
                                <li className="clearfix">
                                    <strong className="title">WEB DESIGN</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-desktop.png') } className="img-responsive"/></div>
                                </li>
                                <li className="clearfix">
                                    <strong className="title">PRINT DESIGN</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-print.png') } className="img-responsive"/></div>
                                </li>
                                <li className="clearfix">
                                    <strong className="title">PHOTOGRAPHY</strong>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                    <div className="icon"><img src={ require('./../../../assets/images/icon-photo.png') } className="img-responsive"/></div>
                                </li>
                            </ul>
                        </div>
                        <div className="image pull-right">
                            <img src={ require('./../../../assets/images/services.png') } className="img-responsive"/>
                        </div>
                    </div>
                </Carousel>
            </section>
        );
    }
}

export default Services;