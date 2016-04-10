import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Footer from './footer';
import 'normalize.css/normalize.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
          <Header/>
          { this.props.children }
          <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default connect()(App);
