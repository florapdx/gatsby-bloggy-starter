import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const Footer = props => {
  const { links, socialLinks } = props;
  const date = new Date();

  return (
    <div className="bloggy__footer">
      <div className="wrapper">
        <div className="col-left">
          <p className="copyright icon-copyright">{`${date.getFullYear()} Your Name/Company name. All rights reserved.`}</p>
        </div>
        <div className="col-center">
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
        <div className="col-right">
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
    </div>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  socialLinks: PropTypes.arrayOf(PropTypes.object)
};

export default Footer;

