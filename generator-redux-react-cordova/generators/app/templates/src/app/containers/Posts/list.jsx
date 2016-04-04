import React, { PropTypes } from 'react';

import Subheader from '../../components/subheader';
import Item from './item';

const List = ({ onShowDetails, posts }) => (
  <div>
    <Subheader
      title={ posts.length ? 'Results' : 'Loading...' }
    />
    { posts.map((item, index) =>
      <Item key={index} item={item} onClick={onShowDetails} />
    )}
  </div>
);

List.propTypes = {
  onShowDetails: React.PropTypes.func.isRequired,
  posts: React.PropTypes.array.isRequired,
};

export default List;
