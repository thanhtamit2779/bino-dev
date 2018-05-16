import * as React from 'react';
import { hot } from 'react-hot-loader';

import './../assets/plugins/bootstrap/dist/css/bootstrap.min.css';
import './../assets/plugins/font-awesome/css/font-awesome.min.css';
import './../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import './../assets/scss/styles.scss';

import { Header, Footer, Content } from './../app/components/Include';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

          {/* HEADER */}
          <Header/>

          {/* CONTENT */}
          <Content/>

          {/* FOOTER */}
          <Footer/>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);