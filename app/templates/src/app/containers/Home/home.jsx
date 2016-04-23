import React from 'react';
import { Subheader, Button } from '../../components';

class Home extends React.Component {
  render() {
    return (
      <div styles="background: #245FB4">
        <Subheader
          title='Home'
        />
        <div>
          <Button
            href='#/posts'
            label='Posts'
          />
        </div>
        <div>
          <Button
            href='#/features'
            label='Features'
          />
        </div>
      </div>
    );
  }
}

export default (Home);
