import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Helmet from 'react-helmet';
import PostList from '../components/blog/post-list';

export default class Index extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {
              "name": "description",
              "content": "My Awesome Blog description"
            },
            {
              "name": "keywords",
              "content": "javascript, js, blog, awesomeness"
            },
          ]}
        />
        <PostList />
      </div>
    )
  }
}
