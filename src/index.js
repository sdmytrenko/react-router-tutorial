import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import List from './components/List'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='admin' component={Admin} />
      <Route path='genre/:genre' component={Genre} />
      <Route path='list' component={List} />
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('root')
)
