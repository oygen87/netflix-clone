import React, { Component } from 'react'
import { Movie } from './Movie'

export default class HorizontalMovieScroll extends Component {
    render() {
        const movies = this.props.movies
            .filter((m) => m.type === this.props.type)
            .map((m) => {
                return <Movie info={m} key={Math.random()}></Movie>
            });

        return (
            <div>
                <p className="movie-container-header">{this.props.type}</p>
                <div className="movie-container">
                    {movies}
                </div>

            </div>
        )
    }
}
