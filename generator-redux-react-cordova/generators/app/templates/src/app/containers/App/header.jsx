import logo from './img/logo.png';

import React from 'react';
import styles from './styles';

const Header = () => (
  <a className={styles.header} href="#/">
    <img src={logo} alt='App Logo' />
  </a>
);

export default Header;
