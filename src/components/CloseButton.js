import React, { Component } from 'react'
import { context } from '../store/MyContext';
import { XCircle } from 'react-feather';

export default class CloseButton extends Component {
    static contextType = context;
    handleClick = (e) => {
        this.context.dispatch({type: "SET_VIEW", payload: "HOME"});
    }
    handleTouchStart = (e) => {
      e.target.closest("svg").classList.add("animated", "pulse", "fastest");
    }
  render() {
    return (
      <div>
      <span className="close-button" onAnimationEnd={this.handleClick} onTouchStart={this.handleTouchStart}>
        <XCircle fill="black" stroke="white" strokeOpacity="0.7"></XCircle>
      </span>
      </div>
    )
  }
}
