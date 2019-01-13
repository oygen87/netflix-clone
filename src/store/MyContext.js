import React, { Component } from 'react';
import { Database } from './Database.js';

export const context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_VIEW":
            return {...state, view: action.payload};
        case "SET_MOVIE":
            return {...state, movie: action.payload};
        default:
            break;    
    }
  };

export class MyProvider extends Component {

    componentDidMount = () => {
        const initState = {
            movies : Database(),
            movie: {},
            view: "HOME",
            money : 1337,
            dispatch: action => {
                this.setState(state => reducer(state, action));
              }
          }

          this.setState(initState);
    }

    state = {}

    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}
