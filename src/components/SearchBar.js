import React, { Component } from 'react'
import { Search, XCircle } from 'react-feather';

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="search-bar-top-container">
                    <div id="search-wrapper" className={this.props.state.focus === true ? "search-wrapper" : "search-wrapper justify-content-center"} onClick={this.props.handleClick}>
                        <Search fill="#333" stroke="grey" height="18" width="18" strokeWidth="3" />
                        <input onKeyDown={this.props.handleInput} onInput={this.props.handleInput} ref={this.props.textInput} id="input" className={this.props.state.input.length > 0 ? "" : "input-unfocus"} type="text" placeholder="Search" onFocus={this.props.handleFocus}/>
                    </div>
                    <button onClick={this.props.handleCancel} id="cancel" className={this.props.state.init ? "d-none" : this.props.state.focus ? "d-flex animated slideInRight fastest" : "d-none animated slideOutRight fastest"}>Cancel</button>
                    <span onClick={this.props.handleCancel} id="cancel-input" className={!this.props.state.focus ? !this.props.state.input.length > 0 ? "d-none" : "cancel-unfocused" : this.props.state.input.length > 0 ? "" : "d-none"}><XCircle height="18" width="18" color="grey" /></span>
                </div>
            </div>
        )
    }
}
export default SearchBar
