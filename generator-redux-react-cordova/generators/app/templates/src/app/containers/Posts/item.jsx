import React, { PropTypes } from 'react';

const PostItem = ({ onClick, item }) => (
  <a onClick={() => (onClick(item.id))}>
    <h3>{item.title}</h3>
    <div>{item.body}</div>
  </a>
);

PostItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
};

export default PostItem;
