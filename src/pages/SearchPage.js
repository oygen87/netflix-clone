import React, { Component } from 'react'
import { context } from '../store/MyContext';
import { Search } from 'react-feather';
import { XCircle } from 'react-feather';
import { Movie } from '../components/Movie'

export default class SearchPage extends Component {
    static contextType = context;
    state = { input: "" };
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount = () => {
        this.setState({ focus: false, init: true });
    }
    handleFocus = (e) => {
        this.setState({ focus: true, init: false });
    }
    handleBlur = (e) => { /*
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        console.log("BLUR", e.target)
        this.setState({ focus: false });*/
    }
    handleClick = (e) => {
        console.log(e.target);
        /*
        e.nativeEvent.stopPropagation();
        console.log(e.target);
        if(e.target.id === "search-wrapper") {
            this.textInput.current.value = "";
            this.setState({isTyping : false});
            return;
        }*/
        if (this.state.focus === false) {
            this.setState({ focus: true });
            this.textInput.current.focus();
        }
    }
    handleInput = (e) => {
        if (e.target.value) {

        }
        this.setState({ focus: true, input: this.textInput.current.value });
    }
    handleCancel = (e) => {
        console.log("CANCEL");
        this.textInput.current.value = "";
        this.setState({ focus: false, input: this.textInput.current.value });
    }
    handleClickPage = (e) => {
        console.log(e.target.id)
            ; if (e.target.id !== "input") {
                console.log("YEEEHA");
                this.setState({ focus: false });
            }
    }
    render() {
        const movies = this.state.input.length > 0 ? this.context.movies
            .filter((m) => m.title.toUpperCase().includes(this.state.input.toUpperCase()))
            .map((m) => {
                return <Movie info={m} key={Math.random()}></Movie>;
            }) : "";
        return (
            <div className="search-bar-page-wrapper" onClick={this.handleClickPage} >
                <div className="search-bar-top-container">
                    <div id="search-wrapper" className={this.state.focus === true ? "search-wrapper" : "search-wrapper justify-content-center"} onClick={this.handleClick}>
                        <Search fill="#333" stroke="grey" height="18" width="18" strokeWidth="3" />
                        <input onKeyDown={this.handleInput} onInput={this.handleInput} ref={this.textInput} id="input" className={this.state.input.length > 0 ? "" : "input-unfocus"} type="text" placeholder="Search" onFocus={this.handleFocus} onBlur={this.handleBlur} />
                    </div>
                    <button onClick={this.handleCancel} id="cancel" className={this.state.init ? "d-none" : this.state.focus ? "d-flex animated slideInRight fastest" : "animated slideOutRight fastest"}>Cancel</button>
                    <span onClick={this.handleCancel} id="cancel-input" className={!this.state.focus ? !this.state.input.length > 0 ? "d-none" : "cancel-unfocused" : this.state.input.length > 0 ? "" : "d-none"}><XCircle height="18" width="18" color="grey" /></span>
                </div>
                
                {movies ? <div className="animated fadeIn fast">
                    <div className="search-banner">Movies and TV</div>
                    <div className="movie-container-search mt-3 animated fadeIn">
                        {movies}
                    </div></div> : ""}
            </div>
        )
    }
}
