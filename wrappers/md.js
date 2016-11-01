import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Post from '../components/blog/post';

import 'stylesheets/markdown-styles.css';

class MarkdownWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { route: { page } } = this.props;
    const post = page.data;

    return (
      <div className="post-page">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <Post post={post} slug={page.file.name} />
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  body: PropTypes.string
};

export default MarkdownWrapper;
