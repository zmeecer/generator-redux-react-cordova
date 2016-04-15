import React from 'react';
import styles from './styles.scss';
import arrowRight from './images/arrow_right.png';

function Button({ label, href }) {
  return (
    <a className={styles.button} href={href}>
      <span>{label}</span>
      <img src={arrowRight} />
    </a>
  );
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};

export default Button;
