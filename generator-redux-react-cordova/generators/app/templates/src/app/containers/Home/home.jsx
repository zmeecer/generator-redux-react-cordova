import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Subheader, Button } from '../../components';
import styles from './styles.scss';

class Home extends React.Component {
  render() {
    return (
      <div styles="background: #245FB4">
        <Subheader
          title='Home'
        />
        <div>
          <Button
            href='#/posts'
            label='Posts'
          />
        </div>
      </div>
    );
  }
}

export default Home;
