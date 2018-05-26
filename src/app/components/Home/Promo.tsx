import * as React from 'react';

class Promo extends React.Component < any, any > {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="promo clearfix">
                <div className="container">
                    <div className="text">
                        <div className="content-top">
                            <span className="title common-title">Let's Get Started Now. <b>It's FREE!</b></span>
                            <p className="description common-description text-center">30 day free trial. Free plan allows up to 2 projects. Pay if you need more. Cancel anytime. No catches.</p>
                            <button className="btn btn-sm btn-default text-center">
                            START FREE TRIAL
                        </button> 
                        </div>
                    </div>
                </div>    
            </section>
        );
    }
}

export default Promo;