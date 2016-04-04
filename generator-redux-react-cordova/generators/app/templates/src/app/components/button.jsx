import React from 'react';
import styles from './styles.scss';

const Button = ({ label, href }) => (
  <a className={styles.button} href={href}>
    { label }
  </a>
);

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};

export default Button;
