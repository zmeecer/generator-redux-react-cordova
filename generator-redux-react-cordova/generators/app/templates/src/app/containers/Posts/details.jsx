import React, { PropTypes } from 'react';
import Subheader from '../../components/subheader';
import Block from '../../components/block';

const PostDetails = ({ post }) => (
  <div>
    <Subheader />
    { post &&
      <div>
        <h3>{item.title}</h3>
        <div>{item.body}</div>
      </div>
    }
    { !post &&
      <Block
        title='Loading'
      />
    }
  </div>
);

PostDetails.propTypes = {
  post: React.PropTypes.object,
  onPrev: React.PropTypes.func.isRequired,
};

export default PostDetails;
