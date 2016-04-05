import React from 'react';
import About from './about';
import More from './more';

class Static extends React.Component {
  render() {
    const pages = {
      about: <About />,
      more: <More />,
    };

    return (
      <div>
        { pages[this.props.params.type] }
      </div>
    );
  }
}

Static.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default Static;
