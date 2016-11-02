import React, { PropTypes, Component } from 'react';

/*
 * Component updated version of BinaryMuse's EmbeddedGist component from
 * this SO thread:
 * http://stackoverflow.com/questions/30429361/how-to-embed-a-gist-using-reactjs
 */

let stylesheetAdded = false;
let gistCallbackId = 0;

class EmbeddedGist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      src: ''
    };
  }

  // Each time we request a Gist, we'll need to generate a new
  // global function name to serve as the JSONP callback.
  static nextGistCallback() {
    gistCallbackId = gistCallbackId + 1;
    return `embed_gist_callback_${gistCallbackId}`;
  }

  // The Gist JSON data includes a stylesheet to add to the page
  // to make it look correct. `addStylesheet` ensures we only add
  // the stylesheet one time.
  static addStylesheet(href) {
    if (stylesheetAdded) {
      return;
    }
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;

    document.head.appendChild(link);
    stylesheetAdded = true;
  }

  componentDidMount() {
    // Create a JSONP callback that will set our state
    // with the data that comes back from the Gist site
    const gistCallback = EmbeddedGist.nextGistCallback();
    window[gistCallback] = gist => {
      this.setState({
        loading: false,
        src: gist.div
      });
      EmbeddedGist.addStylesheet(gist.stylesheet);
    };

    const { gist, file } = this.props;

    let url = `https:\/\/gist.github.com/${gist}.json?callback=${gistCallback}`;
    if (file) {
      url += `&file=${file}`;
    }

    // Add the JSONP script tag to the document.
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  render() {
    const { loading, src } = this.state;

    return loading ? (
      <div>loading...</div>
    ) : (
      <div dangerouslySetInnerHTML={{__html: src}} />
    );
  }
}

EmbeddedGist.propTypes = {
  gist: PropTypes.string.isRequired, // e.g. "username/id"
  file: PropTypes.string // to embed a single specific file from the gist
}

export default EmbeddedGist;
