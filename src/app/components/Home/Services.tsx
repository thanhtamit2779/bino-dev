import * as React from 'react';

class Services extends React.Component<any,any> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="services clearfix">
                <div className="item">
                    <div className="text pull-left">
                        <strong className="title">OUR SERVICES</strong>
                        <ul>
                            <li>
                                <strong className="title">WEB DESIGN</strong>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                <img src={ require('./../../../assets/images/icon-desktop.png') } className="img-responsive"/>
                            </li>
                            <li>
                                <strong className="title">PRINT DESIGN</strong>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                <img src={ require('./../../../assets/images/icon-print.png') } className="img-responsive"/>
                            </li>
                            <li>
                                <strong className="title">PHOTOGRAPHY</strong>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ip sum has been the industry's standard dummy text ever.</p>
                                <img src={ require('./../../../assets/images/icon-photo.png') } className="img-responsive"/>
                            </li>
                        </ul>
                    </div>
                    <div className="image pull-right">
                        <img src={ require('./../../../assets/images/services.png') } className="img-responsive"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;