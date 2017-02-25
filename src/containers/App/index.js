import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink to='/admin'>Админка</NavLink></li>
          <li><NavLink to='/list'>Список жанров</NavLink></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}
