import React, { PropTypes, Component } from 'react';

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
