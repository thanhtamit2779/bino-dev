import * as React from 'react';

import { NavLink } from 'react-router-dom';

class OurPricing extends React.Component < any, any > {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="our-pricing clearfix">
                <div className="container">
                    <div className="row">
                        <div className="text col-sm-12">
                            <strong className="title common-title">OUR PRICING</strong>
                            <p className="description text-center common-description">A 30 days free trial for all. A brief story about how this process works, keep an eye till the end.</p>
                            <span className="common-line"></span>
                        </div>
                        <div className="list col-sm-12">
                            <div className="row">
                                <div className="col-sm-4 item">
                                    <div className="heading active">
                                        <label>STARTER</label>
                                        <div className="circle">
                                            <span className="price">$19</span>
                                            <span className="month">per month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p>Competition Analysis Methods</p>
                                        <p>All Ranked URLs</p>
                                        <p>International Support System</p>
                                        <p>Social Media Tracking</p>
                                        <NavLink to="#">CHOOSE PLAN</NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-4 item">
                                    <div className="heading active">
                                        <label>STARTER</label>
                                        <div className="circle">
                                            <span className="price">$19</span>
                                            <span className="month">per month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p>Competition Analysis Methods</p>
                                        <p>All Ranked URLs</p>
                                        <p>International Support System</p>
                                        <p>Social Media Tracking</p>
                                        <NavLink to="#">CHOOSE PLAN</NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-4 item">
                                    <div className="heading active">
                                        <label>STARTER</label>
                                        <div className="circle">
                                            <span className="price">$19</span>
                                            <span className="month">per month</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p>Competition Analysis Methods</p>
                                        <p>All Ranked URLs</p>
                                        <p>International Support System</p>
                                        <p>Social Media Tracking</p>
                                        <NavLink to="#">CHOOSE PLAN</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        );
    }
}

export default OurPricing;