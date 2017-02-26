import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import List from './components/List'
import Release from './components/Release'
import Login from './components/Login'

export const routes = (
  <div>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    {/* в качестве хука на onEnter - статический метод класса Admin */}
    <Route path='/admin' component={Admin} onEnter={Admin.onEnter}/>
    <Route path='/genre/:genre' component={Genre}>
      <Route path='/genre/:genre/:release' component={Release}/>
    </Route>
    <Route path='/list' component={List} />
    <Route path='/login' component={Login} />
  </Route>
  {/* для всех остальных роутов: показывай NotFound */}
  <Route path='*' component={NotFound} />
  </div>
)