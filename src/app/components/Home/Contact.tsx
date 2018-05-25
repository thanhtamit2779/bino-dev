import * as React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Contact extends React.Component < any, any > {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <section className="contact clearfix">
                <div className="container">
                    <div className="text">
                        <div className="content-top">
                            <strong className="title common-title">OUR BLOG</strong>
                            <p className="description common-description text-center">Suspendisse sed eros mollis, tincidunt felis eget, interdum eratullam sit amet odio.</p>
                            <span className="line common-line"></span>
                        </div>
                    </div>
                    <div className="content row"> 
                        <div className="col-sm-5">
                            <div className="left">
                                <div className="line-1 line">
                                    <label>OUR ADDRESS</label>
                                    <p>House #13, Streat road, Sydney 2310 Australia</p>
                                </div>
                                <div className="line-2 line">
                                    <label>CONTACT US</label>
                                    <p>+ 880 168 109 1425</p>
                                    <p>+ 880 168 109 1425</p>
                                </div>
                                <div className="line-2 line">
                                    <label>EMAIL US</label>
                                    <p>contactus@email.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="right">
                                <Form>
                                    <FormGroup>
                                        <Input type="text" name="name" id="name" placeholder="Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="email" name="email" id="email" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="subject" id="subject" placeholder="Subject" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="textarea"  name="message" id="message" placeholder="Message" />
                                    </FormGroup>  
                                    <Button>SEND MESSAGE</Button>     
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        );
    }
}

export default Contact;