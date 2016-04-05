import React, { PropTypes } from 'react';

import { List, Subheader } from '../../components';

const PostList = ({ posts, onShowDetails }) => (
  <div>
    <Subheader
      title={ posts.length ? 'Results' : 'Loading...' }
    />
    <List
      items={posts}
      onClick={onShowDetails}
    />
  </div>
);

PostList.propTypes = {
  onShowDetails: React.PropTypes.func.isRequired,
  posts: React.PropTypes.array.isRequired,
};

export default PostList;
