import React, { Component } from 'react'

export default class Genre extends Component {
  render() {
    return (
      <div className='row'>
        <h3 className='col-md-12'>{this.props.params.genre}</h3>
        <div className='col-md-12'>Здесь будет список релизов</div>
      </div>
    )
  }
}