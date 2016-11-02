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
            <p className="post-author">{author}</p>
          ) : null
        }
        <span className="post-date">{date}</span>
        {
          tags && tags.length ? (
            <div className="post-tags">
              {
                tags.map((tag, idx) => {
                  return (
                    <span key={tag} className="post-tag">
                      <a>{`tag${idx < tags.length - 1 ? ', ' : ''}`}</a>
                    </span>
                  );
                })
              }
            </div>
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
