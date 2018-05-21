import * as React from 'react';

class OurTeam extends React.Component < any, any > {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="our-team clearfix">
                <div className="container">
                    <div className="row">
                        <div className="text col-sm-12">
                            <strong className="title common-title">OUR PRICING</strong>
                            <p className="description text-center common-description">A 30 days free trial for all. A brief story about how this process works, keep an eye till the end.</p>
                            <span className="common-line"></span>
                        </div>
                        <ul className="user nav">
                            <li className="item nav-item">
                                <div className="image">
                                    <img src={ require('./../../../assets/images/user-1.png') } className="img-fluid"/>
                                </div>    
                            </li>
                            <li className="item nav-item">
                                <div className="image">
                                    <img src={ require('./../../../assets/images/user-2.png') } className="img-fluid"/>
                                </div>
                            </li>
                            <li className="item nav-item">
                                <div className="image">
                                    <img src={ require('./../../../assets/images/user-3.png') } className="img-fluid"/>
                                </div>
                            </li>
                            <li className="item nav-item">
                                <div className="image">
                                    <img src={ require('./../../../assets/images/user-4.png') } className="img-fluid"/>
                                </div>
                            </li>
                            <li className="item nav-item">
                                <div className="image">
                                    <img src={ require('./../../../assets/images/user-5.png') } className="img-fluid"/>
                                </div>
                            </li>                       
                        </ul>
                    </div>    
                </div>
            </section>
        );
    }
}

export default OurTeam;