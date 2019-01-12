import React, { Component } from 'react';
import './App.scss';
import Start from './pages/Start';
import Details from './pages/Details';
import Hamburger from './pages/Hamburger';
import SearchPage from './pages/SearchPage';
import { Home, Search, Download, Menu } from 'react-feather';
import { context } from './store/MyContext.js';


class App extends Component {
  static contextType = context;
  render() {
    let View;
    switch (this.context.view) {
      case "HOME":
        View = <div className="animated fadeIn faster"><Start/></div>;
        break;
      case "DETAILS":
        View = <Details/>;
        break;
      case "MENU":
        View = <Hamburger/>
        break;
      case "SEARCH":
      View = <SearchPage/>
      break;
      default:
        View = <Start/>;
    }

    return (
      <div>
        <div className="App">


          {View}



          <br /><br />

          <footer>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "HOME" })}>
              <Home color={this.context.view === "HOME" || this.context.view === "DETAILS" ? "white" : "grey"}  />
              <span>Home</span>
            </div>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "SEARCH" })}>
              <Search color={this.context.view === "SEARCH" ? "white" : "grey"}  />
              <span>Search</span>
            </div>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "DOWNLOAD" })}>
              <Download color={this.context.view === "DOWNLOAD" ? "white" : "grey"}  />
              <span>Downloads</span>
            </div>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "MENU" })}>
              <Menu color={this.context.view === "MENU" ? "white" : "grey"}  />
              <span>Menu</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
