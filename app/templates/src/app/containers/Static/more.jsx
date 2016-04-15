import React from 'react';
import { Block, Subheader } from '../../components';

function More() {
  return (
    <div>
      <Subheader
        title="TODO"
      />
      <Block
        title='Search page: actions, filtering, reducer...'
      />
      <Block
        title='Middleware for API requests'
      />
      <Block
        title='Upgrades styles'
      />
    </div>
  );
}

export default More;
