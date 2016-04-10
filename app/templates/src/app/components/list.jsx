import React, { PropTypes } from 'react';
import styles from './styles.scss';
import arrowRight from './images/arrow_right.png';

const List = ({ items, onClick }) => (
  <div className={styles.list}>
    { items.map((item, index) =>
      <a key={index} onClick={() => onClick(item.id)}>
        { item.title &&
          <h3>{item.title}</h3>
        }
        { item.body &&
          <p>{item.body}</p>
        }
        <img src={arrowRight} />
      </a>
    )}
  </div>
);

List.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default List;
