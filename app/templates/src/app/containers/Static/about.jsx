import React from 'react';
import { Block, Subheader } from '../../components';

function About() {
  return (
    <div>
      <Subheader
        title="About"
      />
      <Block
        title="A basic Yeoman generator for using Redux+React on Cordova platform"
        text="You can star this project on the Github!"
        link="https://github.com/zmeecer/generator-redux-react-cordova"
      />
    </div>
  );
}

About.propTypes = {
};

export default About;
