import React from 'react';
import styles from './styles.scss';

const Subheader = ({ title }) => (
  <div className={styles.subheader}>
    <h2>{title}</h2>
  </div>
);

Subheader.propTypes = {
  title: React.PropTypes.string,
};

export default Subheader;
