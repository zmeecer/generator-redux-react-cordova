import React, { PropTypes } from 'react';
import { Block, Subheader } from '../../components';

function PostDetails({ post }) {
  return (
    <div>
      <Subheader
        title={ (post && `Post #${post.id}`) || 'Loading...'}
      />
      { post &&
        <Block
          title={post.title}
          text={post.body}
        />
      }
    </div>
  );
}

PostDetails.propTypes = {
  post: PropTypes.object,
};

export default PostDetails;
