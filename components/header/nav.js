import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const Nav = props => {
  const { links } = props;

  return (
    <div className="nav">
      <ul>
        {
          links && links.map(link => {
            return (
              <li key={link.path}>
                <Link to={prefixLink(`${link.path}`)}>{link.name}</Link>
              </li>
            );
          })
        }
        <li key="about">
          <Link to={prefixLink('/about/')}>About</Link>
        </li>
      </ul>
    </div>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

export default Nav;
