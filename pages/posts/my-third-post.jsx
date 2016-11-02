import React from 'react';
import JSXPostWrapper from '../../components/blog/post/jsx-post-wrapper';
import EmbeddedGist from '../../components/embedded-gists';

const myThirdPost = props => {
  return (
    <JSXPostWrapper route={props.route}>
      <div>
        <p>Fashion axe semiotics marfa 8-bit master cleanse freegan. Vinyl umami before they sold out, polaroid ennui marfa `helvetica` keytar tote bag asymmetrical banh mi glossier. Ugh irony pour-over `XOXO put a bird` on it lumbersexual, tote bag pitchfork sriracha copper mug la croix godard roof party whatever blue bottle.</p>
        <EmbeddedGist gist={'florapdx/f33807aa0cd6ad20fc26d40d63be9e3d'} />
        <p>Fashion axe semiotics marfa 8-bit master cleanse freegan. Vinyl umami before they sold out, polaroid ennui marfa `helvetica` keytar tote bag asymmetrical banh mi glossier. Ugh irony pour-over `XOXO put a bird` on it lumbersexual, tote bag pitchfork sriracha copper mug la croix godard roof party whatever blue bottle.</p>
      </div>
    </JSXPostWrapper>
  );
};

export default myThirdPost;