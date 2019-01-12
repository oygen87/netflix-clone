import React, { Component } from 'react'
import { Database } from '../store/Database'
import { Movie } from '../components/Movie'


export class Start extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: Database(),
    };
  }
  render() {
    const moviesPopular = this.state.movies
      .filter((m) => m.type === "popular")
      .map((m) => {
        return <Movie info={m} key={Math.random()}></Movie>;
      });
    const moviesHorror = this.state.movies
      .filter((m) => m.type === "horror")
      .map((m) => {
        return <Movie info={m} key={Math.random()}></Movie>
      });
    const featured = this.state.movies
    .filter((m) => m.type === "featured")
    .map((m) => {
      return <Movie featured={true} info={m} key={Math.random()}></Movie>
    });
    return (
      <div>
        <div>
        {featured}
          <p className="movie-container-header">Popular on Netflix</p>
          <div className="movie-container">
            {moviesPopular}
          </div>
          <p className="movie-container-header">Horror movies</p>
          <div className="movie-container">
            {moviesHorror}
          </div>
        
        </div>
      </div>
    )
  }
}

export default Start
