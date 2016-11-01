import React, { PropTypes } from 'react';
import { config } from 'config';
import PostHeader from './post-header';
import PostFooter from './post-footer';
import postManifest from '../../../post-manifest';

const Post = props => {
  const { post, slug } = props;
  const postMeta = postManifest[slug];

  return (
    <div className="post">
      <PostHeader postMeta={postMeta} />
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      <PostFooter />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
