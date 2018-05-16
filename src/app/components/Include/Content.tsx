import * as React from 'react';
import { Switch, Route } from 'react-router';

import Index from './../Home/Index';

class Content extends React.Component < any, any > {
    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/' component={Index} exact/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Content;