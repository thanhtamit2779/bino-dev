import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

const items: any[] = [
    {
        src             : require('./../../../assets/images/slider.png'),
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
    },
    {
        src             : require('./../../../assets/images/slider.png'),
        headingSmall    : '1 Our Clients Are Our First Priority',
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
    },
    {
        src             : require('./../../../assets/images/slider.png'),
        headingSmall    : '1 Our Clients Are Our First Priority',
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
        const slides:any = items.map((item, key) => {
            return (
                <div key={key} className="item" style={ {backgroundImage : `url( ${item.src} )`}}>
                    <img src={item.src}/>
                    <div className="content">
                        <p className="heading-small text-center">{ item.headingSmall }</p>
                        <p className="heading-big text-center">{ item.headingBig }</p>
                        <div className="text-center common-line line"></div>
                        <div className="description text-center">
                            <p>{  item.description }</p>
                        </div>
                        <div className="groupt-button text-center">
                            <NavLink to={ item.btnGetStart.link } className="btn btn-sm btn-default get-start">{ item.btnGetStart.text }</NavLink>
                            <NavLink to={ item.btnLearnMore.link } className="btn btn-sm btn-default learn-more">{ item.btnLearnMore.text }</NavLink>
                        </div>
                    </div>    
                </div>
            )
        });

        return (
            <React.Fragment>
               <Carousel showThumbs={false} className="sliders clearfix" showIndicators={false} showStatus={false} >
                    { slides }        
                </Carousel>
            </React.Fragment>
        );
    }
}

export default Slider;