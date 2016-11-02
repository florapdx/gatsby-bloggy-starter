import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Header from '../components/header';
import Footer from '../components/footer';

class Base extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="bloggy">
        <Header />
        <div className="bloggy__main">
          <div className="wrapper">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Base.propTypes = {
  children: PropTypes.any
};

export default Base;
