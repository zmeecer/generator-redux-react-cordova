import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configuredStore from './store/configureStore';

import App from './containers/App';
import Home from './containers/Home';
import Posts from './containers/Posts';
import Static from './containers/Static';

// require('file?name=www/[name].[ext]!./index.html');

document.addEventListener('deviceready', () => {
  // TODO: add splashscreen and statusbar plugin
}, false);

ReactDOM.render(
  <div>
    <Provider store={ configuredStore }>
      <Router history={ hashHistory }>
        <Route component={ App }>
          <IndexRoute component={Home}/>
          <Route path="/home" component={ Home } />
          <Route path="/posts(/:id)" component={ Posts } />
          <Route path="/static/:type" component={ Static } />
          <Redirect from="/" to="/home" />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('app')
);
