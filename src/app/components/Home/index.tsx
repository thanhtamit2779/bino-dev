import * as React from 'react';
import Slider from './../Include/Slider';
import Introduce from './Introduce';
import About from './About';
import Services from './Services';
import Work from './Work';
import CaseStudy from './CaseStudy';
import OutStat from './OutStat';
import OurPricing from './OurPricing';
import OurTeam from './OurTeam';

export default class Index extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Slider/>
                <Introduce/>
                <About/>
                <Services/>
                <Work/>
                <CaseStudy/>
                <OutStat/>
                <OurPricing/>
                <OurTeam/>
            </React.Fragment>
        );
    }
}

