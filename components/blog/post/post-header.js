import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const PostHeader = props => {
  const {
    postMeta: {
      slug,
      title,
      author,
      date,
      tags
    },
    isTitleALink
  } = props;

  return (
    <div className="post-header">
      <h3 className="post-title">
        {
          isTitleALink ? (
            <Link to={prefixLink(`posts/${slug}/`)}>{title}</Link>
          ) : {title}
        }
      </h3>
      <div className="post-meta">
        {
          author ? (
            <span className="post-author">{author}</span>
          ) : null
        }
        <span className="post-date">{date}</span>
        {
          tags ? (
            <span className="post-abstract">{tags}</span>
          ) : null
        }
      </div>
    </div>
  );
};

PostHeader.defaultProps = {
  isTitleALink: false
};

PostHeader.propTypes = {
  postMeta: PropTypes.object,
  isTitleALink: PropTypes.bool
};

export default PostHeader;
