import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
      </div>
    )
  }
}

export default Header
