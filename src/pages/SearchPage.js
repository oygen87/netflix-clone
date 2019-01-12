import React, { Component } from 'react'
import { context } from '../store/MyContext';
import { Search } from 'react-feather';
import { XCircle } from 'react-feather';
import { Movie } from '../components/Movie'
import { SearchBar } from '../components/SearchBar'

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
    handleFocus = () => {
        this.setState({ focus: true, init: false });
    }
    handleClick = () => {
        if (this.state.focus === false) {
            this.setState({ focus: true });
            this.textInput.current.focus();
        }
    }
    handleInput = () => {
        this.setState({ focus: true, input: this.textInput.current.value });
    }
    handleCancel = () => {
        this.textInput.current.value = "";
        this.setState({ focus: false, input: this.textInput.current.value });
    }
    handleClickPage = (e) => { 
        if (e.target.id !== "input") {
                this.setState({ focus: false });
        }
    }
    render() {
        const movies = this.state.input.length > 0 ? this.context.movies
            .filter((m) => m.title.toUpperCase().includes(this.state.input.toUpperCase()))
            .map((m) => {
                return <Movie info={m} key={Math.random()}></Movie>;}) : "";

        return (
            <div className="search-bar-page-wrapper" onClick={this.handleClickPage} >

               <SearchBar 
                    state={this.state} 
                    handleInput={this.handleInput} 
                    handleCancel={this.handleCancel} 
                    handleFocus={this.handleFocus} 
                    textInput={this.textInput}/>
                
                {movies ? <div className="animated fadeIn fast">
                    <div className="search-banner">Movies and TV</div>
                    <div className="movie-container-search mt-3 animated fadeIn">
                        {movies}
                    </div></div> : ""}
            </div>
        )
    }
}
