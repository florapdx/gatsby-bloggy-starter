/*
 * Slightly slimmed down and ES6 updated version of Matt Zabriskie's
 * react-disqus-thread module.
 * This version includes some fixes suggested by PRs on that repo, and is
 * likely temp until those are merged.
 */

import React, { PropTypes, Component } from 'react';

const DISQUS_PROPS = [
  'shortname',
  'identifier',
  'title',
  'url',
  'category_id'
];

let disqusAdded = false;

function copyProps(context, props, prefix = '') {
  Object.keys(props).forEach(prop => {
    context[prefix + prop] = props[prop];
  });
}

class DisqusThread extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { identifier: props.identifier };

    this.updateStateAndLoadDisqus = this.updateStateAndLoadDisqus.bind(this);
    this.addDisqusScript = this.addDisqusScript.bind(this);
    this.loadDisqus = this.loadDisqus.bind(this);
  }

  componentDidMount() {
    this.updateStateAndLoadDisqus();
  }

  shouldComponentUpdate() {
    if (this.state.identifier !== this.props.identifier) {
      this.updateStateAndLoadDisqus();
    }
  }

  updateStateAndLoadDisqus() {
    this.state.identifier = this.props.identifier;
    this.loadDisqus();
  }

  addDisqusScript() {
    if (disqusAdded) {
      return;
    }

    const child = this.disqus = document.createElement('script');
    const parent = document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0];

    child.async = true;
    child.type = 'text/javascript';
    child.src = `\/\/${this.props.shortname}.disqus.com/embed.js`;

    parent.appendChild(child);
    disqusAdded = true;
  }

  loadDisqus() {
    const props = {};
    DISQUS_PROPS.forEach(prop => {
      if (!!this.props[prop]) {
        props[prop] = this.props[prop];
      }
    });

    // Always set url
    if (!props.url || !props.url.length) {
      props.url = window.location.href;
    }

    // Reset Disqus if it's already been added
    if (typeof DISQUS !== 'undefined') {
      DISQUS.reset({
        reload: true,
        config: function config() {
          copyProps(this.page, props);
          this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
        }
      });
    } else {
      copyProps(window, props, 'disqus_');
      this.addDisqusScript();
    }
  }

  render() {
    return (
      <div className="disqus-threads">
        <div id="disqus_thread" />
        <noscript>
          <span>
            Please enable JavaScript to view the
            <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a>
          </span>
        </noscript>
        <a href="http://disqus.com" className="dsq-brlink">
          Blog comments powered by <span className="logo-disqus">Disqus</span>.
        </a>
      </div>
    );
  }
}

DisqusThread.defaultProps = {
  shortname: null,
  identifier: null,
  title: null,
  url: null,
  category_id: null
};

DisqusThread.propTypes = {
  id: React.PropTypes.string,

  /**
   * `shortname` tells the Disqus service your forum's shortname,
   * which is the unique identifier for your website as registered
   * on Disqus. If undefined , the Disqus embed will not load.
   */
  shortname: PropTypes.string.isRequired,

  /**
   * `identifier` tells the Disqus service how to identify the
   * current page. When the Disqus embed is loaded, the identifier
   * is used to look up the correct thread. If disqus_identifier
   * is undefined, the page's URL will be used. The URL can be
   * unreliable, such as when renaming an article slug or changing
   * domains, so we recommend using your own unique way of
   * identifying a thread.
   */
  identifier: PropTypes.string,

  /**
   * `title` tells the Disqus service the title of the current page.
   * This is used when creating the thread on Disqus for the first time.
   * If undefined, Disqus will use the <title> attribute of the page.
   * If that attribute could not be used, Disqus will use the URL of the page.
   */
  title: PropTypes.string,

  /**
   * `url` tells the Disqus service the URL of the current page.
   * If undefined, Disqus will take the window.location.href.
   * This URL is used to look up or create a thread if disqus_identifier
   * is undefined. In addition, this URL is always saved when a thread is
   * being created so that Disqus knows what page a thread belongs to.
   */
  url: PropTypes.string,

  /**
   * `category_id` tells the Disqus service the category to be used for
   * the current page. This is used when creating the thread on Disqus
   * for the first time.
   */
  category_id: PropTypes.string
};

export default DisqusThread;
