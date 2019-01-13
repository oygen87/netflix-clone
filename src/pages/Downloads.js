import React, { Component } from 'react'
import { ArrowDownCircle} from 'react-feather';
import { context } from '../store/MyContext';

export default class Downloads extends Component {
    static contextType = context;
    handleClick = () => {
        this.context.dispatch({type: "SET_VIEW", view: "HOME"});
    }
  render() {
    return (
      <div className="downloads-container">
        <ArrowDownCircle height="160" width="160" stroke="#171717" fill="grey" />
        <p>Downloaded movies and series are shown here.</p>
        <button onClick={this.handleClick} className="download-see-titles">FIND TITLES TO DOWNLOAD</button>
      </div>
    )
  }
}
