import React, { Component } from 'react'
import './Tag.css'

export default class Tag extends Component {
  render() {
    return (
      <p className="tag">{this.props.tagname}</p>
    )
  }
}
