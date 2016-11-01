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
      <h2 className="post-title">
        {
          isTitleALink ? (
            <Link to={prefixLink(`posts/${slug}/`)}>{title}</Link>
          ) : <span>{title}</span>
        }
      </h2>
      <div className="post-meta">
        {
          author ? (
            <span className="post-author">{author}</span>
          ) : null
        }
        <span className="post-date">{date}</span>
        {
          tags && tags.length ? (
            <p className="post-tags">
              {
                tags.map((tag, idx) => {
                  return (
                    <span key={tag}>
                      <a>{`tag ${idx < tags.length ? ',' : ''}`}</a>
                    </span>
                  );
                })
              }
            </p>
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
