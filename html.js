import React, { PropTypes, Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from './utils/typography';
import Helmet from 'react-helmet';

const BUILD_TIME = new Date().getTime()

class Site extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const head = Helmet.rewind();

    let css = null;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

Site.propTypes = {
  body: PropTypes.string
};

export default Site;

