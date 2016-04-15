import logo from './images/logo.png';

import React from 'react';
import styles from './styles';

function Header() {
  return (
    <a className={styles.header} href="#/">
      <img src={logo} alt='App Logo' />
    </a>
  );
}

export default Header;
