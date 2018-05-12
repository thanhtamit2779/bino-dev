import * as React from 'react';
import { hot } from 'react-hot-loader';

import './../assets/plugins/bootstrap/dist/css/bootstrap.min.css';
import './../assets/plugins/font-awesome/css/font-awesome.min.css';

import { Header, Footer } from './../app/components/Include';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

          {/* HEADER */}
          <Header/>

          {/* CONTENT */}
      
          {/* FOOTER */}
          <Footer/>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);