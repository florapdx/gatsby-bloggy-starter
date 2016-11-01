import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Helmet from 'react-helmet';

const About = () => {
  return (
    <div className="about">
      <Helmet title={`${config.siteTitle} | About`} />
      <h1>About Page</h1>
      <div className="column-left">
        <img src={prefixLink('/images/author.png')} />
      </div>
      <div className="column-right">
        <p>Prism pinterest edison bulb quinoa. Bespoke drinking vinegar typewriter, raw denim chia bitters freegan biodiesel cred fanny pack blog.Shoreditch umami craft beer whatever, taxidermy blue bottle fanny pack locavore selfies YOLO chicharrones pabst. Woke microdosing flannel messenger bag gastropub, cardigan bushwick paleo pug etsy blue bottle.</p>
        <p>YOLO edison bulb jianbing hella actually, thundercats hexagon biodiesel leggings beard DIY raw denim before they sold out 8-bit. Blog knausgaard chicharrones next level slow-carb. Everyday carry yr next level, drinking vinegar tumblr +1 gastropub williamsburg tbh cred chartreuse normcore seitan mlkshk whatever.</p>
      </div>
    </div>
  );
};

export default About;