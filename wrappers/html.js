import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Post from '../components/blog/post';

class HTMLWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const page = this.props.route.page.data;

    return (
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    );
  }
}

HTMLWrapper.propTypes = {
  router: PropTypes.object
};

export default HTMLWrapper;
