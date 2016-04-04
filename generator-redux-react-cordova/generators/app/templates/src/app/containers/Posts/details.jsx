import React, { PropTypes } from 'react';
import Subheader from '../../components/subheader';

const PostDetails = ({ post }) => (
  <div>
    <Subheader
      title={ (post && `Post #${post.id}`) || 'Loading...'}
    />
    { post &&
      <div>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </div>
    }
  </div>
);

PostDetails.propTypes = {
  post: React.PropTypes.object,
  onPrev: React.PropTypes.func.isRequired,
};

export default PostDetails;
