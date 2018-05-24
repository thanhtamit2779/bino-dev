
import * as React from 'react';
import { NavLink } from 'react-router-dom';

class OurBlog extends React.Component < any, any > {

    constructor(props : any) {
        super(props);
    }

    componentDidUpdate() {
        $('.item').hover(function() {
            $(this).find('.caption').show();
        });
    }

    render() {
        return (
            <section className="our-blog clearfix">
                <div className="text">
                    <div className="content-top">
                        <strong className="title common-title">OUR BLOG</strong>
                        <p className="description common-description text-center">Suspendisse sed eros mollis, tincidunt felis eget, interdum eratullam sit amet odio.</p>
                        <span className="line common-line"></span>
                    </div>
                </div>
                <div className="list"> 
                    <div className="item odd">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-1.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item even active">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-1.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item odd">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-2.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item even active">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-1.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item odd active">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-1.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item even">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-3.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item odd active">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-1.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                    <div className="item even">
                        <NavLink to="#">
                            <img src={ require('./../../../assets/images/blog-4.png') } className="img-fluid"/>
                        </NavLink>    
                        <div className="caption d-none">
                            <span className="category">abc</span>
                            <span className="title">def</span>
                            <span className="line"></span>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s, an unknown printer took a galley of type a scrambled it to make a type specimen book.
                            </div>
                            <NavLink to="#" className="readmore">Read more >></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurBlog;