import React from 'react';
import styles from './styles.scss';

function Footer() {
  return (
    <ul className={styles.footer}>
      <li>
        <a href='#/'>Home</a>
      </li>
      <li>
        <a href='#/static/about'>About</a>
      </li>
      <li>
        <a href='#/static/more'>More</a>
      </li>
    </ul>
  );
}

export default Footer;
