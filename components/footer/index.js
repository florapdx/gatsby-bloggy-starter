import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const Footer = props => {
  const { links, socialLinks } = props;

  return (
    <div className="footer">
      <div className="footer-left">
        <p className="icon-copyright">Your Name/Company name. All rights reserved.</p>
      </div>
      <div className="footer-center">
        {
          links && links.map(link => {
            return (
              <li key={link}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })
        }
      </div>
      <div className="footer-right">
        <ul className="social-links">
        {
          socialLinks && socialLinks.map(link => {
            return (
              <li key={link}>
                <Link to={link.url} className={`icon-${link.name.toLowerCase()}`}></Link>
              </li>
            );
          })
        }
        </ul>
      </div>
    </div>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  socialLinks: PropTypes.arrayOf(PropTypes.object)
};

export default Footer;

