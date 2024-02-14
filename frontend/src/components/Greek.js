import React, { Component } from 'react'

class Greek extends Component {
  render() {
    return (
      <div><h1>Welcome to Class Components {this.props.name} with id{this.props.id}</h1></div>
    )
  }
}

export default Greek