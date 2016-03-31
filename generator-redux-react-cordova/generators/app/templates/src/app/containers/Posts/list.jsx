import React, { PropTypes } from 'react';

import Subheader from '../../components/subheader';
import Block from '../../components/list';
import Item from './item';

const List = ({ onShowDetails, posts }) => (
  <div>
    <Subheader title="Results" />
    { posts.map((item, index) =>
      <Item key={index} item={item} onClick={onShowDetails} />
    )}
    { !posts.length &&
      <Block
        content='Loading...'
      />
    }
  </div>
);

List.propTypes = {
  onShowDetails: React.PropTypes.func.isRequired,
  posts: React.PropTypes.array.isRequired,
};

export default List;
