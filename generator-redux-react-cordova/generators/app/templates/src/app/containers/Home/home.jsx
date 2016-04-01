import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Subheader } from '../../components';
import styles from './styles.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Subheader
          title='Home'
        />
      </div>
    );
  }
}

export default Home;
