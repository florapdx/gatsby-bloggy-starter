import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import PostHeader from './post/post-header';

const PostSummary = props => {
  const { postMeta } = props;

  return (
    <div className="post-summary">
      <PostHeader postMeta={postMeta} isTitleALink={true} />
      <div className="post-abstract">
        <p>
          {postMeta.abstract}
          <span>
            <Link
              to={prefixLink(`posts/${postMeta.slug}/`)}
              className="read-on"
            > read on &#8594;</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

PostSummary.propTypes = {
  postMeta: PropTypes.object
};

export default PostSummary;
