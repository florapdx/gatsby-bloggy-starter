/*
 * Acts as a wrapper for posts written in JS or JSX,
 * since these are loaded via babel-loader and thus aren't passed through
 * base wrapper components.
 * We need this to add post header + footer, and to handle things like
 * Gist embeds.
 * Takes the place of both the wrapper/component and the components/post/index wrapper.
 */

import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import DisqusThread from '../../shared/disqus-threads';
import PostHeader from './post-header';
import PostFooter from './post-footer';
import postManifest from '../../../post-manifest';

class JSPostWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { route: { page } } = this.props;
    const post = page.data;
    const postMeta = postManifest[page.file.name];

    return (
      <div className="post-page">
        <Helmet
          title={`${config.siteTitle} | Blog`}
        />
        <div className="post">
          <PostHeader postMeta={postMeta} />
            {this.props.children}
          <PostFooter />
        </div>
        {
          config.ENABLE_DISQUS ? (
            <DisqusThread
              shortname={config.DISQUS_SHORTNAME}
              identifier={postMeta.title}
              title={postMeta.title}
              url={`${config.SITE_ROOT_URL}/posts/${page.file.name}`}
              category_id={config.DISQUS_CATEGORY}
            />
          ) : null
        }
      </div>
    );
  }
}

JSPostWrapper.propTypes = {
  children: PropTypes.any
};

export default JSPostWrapper;
