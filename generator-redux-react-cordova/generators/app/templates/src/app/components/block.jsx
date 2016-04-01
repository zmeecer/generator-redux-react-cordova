import React from 'react';

// import styles from './styles.scss';

const Block = ({ text, title }) => (
  <div>
    { title &&
      <h2>{title}</h2>
    }
    { text &&
      <p>{text}</p>
    }
  </div>
);

Block.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default Block;
