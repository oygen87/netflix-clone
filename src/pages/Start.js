import React, { Component } from 'react'
import { Database } from '../store/Database'
import { Movie } from '../components/Movie'
import HorizontalMovieScroll from '../components/HorizontalMovieScroll';


export class Start extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: Database(),
    };
  }
  render() {
    const featured = this.state.movies
      .filter((m) => m.type === "featured")
      .map((m) => {
        return <Movie featured={true} info={m} key={Math.random()}></Movie>
      });
    return (
      <div>
        <div>

          {featured}

          <HorizontalMovieScroll type="Popular on Netflix" movies={this.state.movies} />
          <HorizontalMovieScroll type="Horror movies" movies={this.state.movies} />
          <HorizontalMovieScroll type="Comedy TV" movies={this.state.movies} />

          <br/>
        </div>
      </div>
    )
  }
}

export default Start
