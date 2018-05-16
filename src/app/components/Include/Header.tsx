import * as React from 'react';
import Navigation from './Navigation';

class Header extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = { test : false }
    }

    render() {
        return (
            <header className="header">
                <Navigation/>
            </header>
        );
    }
}

export default Header;