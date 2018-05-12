import * as React from 'react';
import { NavLink } from 'react-router-dom';

const sliders: any[] = [
    {
        src           : require('./../../../assets/images/slider.png'),
        headingSmall    : 'Our Clients Are Our First Priority',
        headingBig      : 'WELCOME TO BINO',
        description     : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        btnGetStart     : {
            link  : '#',
            text  : 'GET STARTED NOW'
        },
        btnLearnMore     : {
            link  : '#',
            text  : 'LEARN MORE'
        }
    }
];

class Slider extends React.Component<any, any> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
               <div className="sliders">
                    {
                        sliders.map( (slider, key) => {
                            return (
                                <div className="item" key={key}>
                                    <img src={slider.src} />
                                    <div className="content">
                                        <span className="heading-small">{   slider.headingSmall }</span>
                                        <span className="heading-small">{   slider.headingBig  }</span>
                                        <div className="descirption">
                                            {  slider.description }
                                        </div>
                                        <p className="button">
                                            <NavLink to={ slider.btnGetStart.link } className="btn btn-sm btn-default pull-left">{ slider.btnGetStart.text }</NavLink>
                                            <NavLink to={ slider.btnLearnMore.link } className="btn btn-sm btn-default pull-left">{ slider.btnLearnMore.text }</NavLink>
                                        </p>
                                    </div>    
                                </div>
                            )
                        })
                    }
               </div>
            </React.Fragment>
        );
    }
}

export default Slider;