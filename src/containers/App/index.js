import React, { Component } from 'react'
import { Link } from 'react-router'

import './styles.scss'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><Link to='/admin' activeClassName='active'>Админка</Link></li>
          <li><Link to='/list' activeClassName='active'>Список жанров</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}
