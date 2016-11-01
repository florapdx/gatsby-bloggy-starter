import React, { PropTypes, Component } from 'react';
import values from 'lodash.values';
import PostSummary from './post-summary';
import postManifest from '../../post-manifest';

/*
 * TODO: add pagination splitting posts into groups of
 * 10?
 */
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: 1 };
  }

  render() {
    const { postsPerPage } = this.props;
    const { currentPage } = this.state;

    const posts = values(postManifest)
      .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
      <div className="post-list">
      {
        posts.map(postMeta => {
          return (
            <li key={`${postMeta.slug}`}>
              <PostSummary postMeta={postMeta} />
            </li>
          );
        })
      }
      </div>
    );
  }
};

PostList.defaultProps = {
  postsPerPage: 10
};

PostList.propTypes = {
  postsPerPage: PropTypes.number
};

export default PostList;
