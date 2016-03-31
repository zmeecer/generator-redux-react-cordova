import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Block
          title='Home'
        />
      </div>
    );
  }
}

export default Home;
