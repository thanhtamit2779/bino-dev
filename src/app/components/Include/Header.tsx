import * as React from 'react';
import Navigation from './Navigation';
import Slider from './Slider';

class Header extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = { test : false }
    }

    render() {
        return (
            <header className="header">
                <Navigation/>  
                <Slider/>  
            </header>
        );
    }
}

export default Header;