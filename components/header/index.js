import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Nav from './nav';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { links } = this.props;

    return (
      <div className="header">
        <div className="logo">
          <Link to={prefixLink('/')}>
            <img src={prefixLink('/images/logo.png')} alt="Blog logo" />
          </Link>
        </div>
        <Nav links={links} />
      </div>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
