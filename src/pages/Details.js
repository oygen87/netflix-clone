import React, { Component } from 'react'
import { context } from '../store/MyContext.js';
import CloseButton from '../components/CloseButton.js';
import { Play } from 'react-feather';

export class Details extends Component {
  static contextType = context;
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <CloseButton />

        <div className="details-background-blur">
          <img src={this.context.movie.url} title={this.context.movie.title} alt={this.context.movie.title} />
        </div>

        <div className="details-poster-container animated fadeIn faster">
          <img src={this.context.movie.url} title={this.context.movie.title} alt={this.context.movie.title} />
        </div>
        <p className="details-info-paragraph"><span className="t-green">98 % match</span> <span className="t-grey">2018</span> <span className="t-grey">16+</span> <span className="t-grey">1 season</span></p>
        <p className="see-season-now"><span>See season 1 now</span></p>

        <div className="container justify-content-center">
          <button className="red-play mb-3"><Play fill="white" strokeOpacity="0"/><span className="ml-1">Play</span></button>
          <p className="movie-details-desc">
            {this.context.movie.desc}
          </p>

          <p className="details-cast">
            Cast: Johnny Depp, Megan Fox, Macauly Caulkin, Eva Mendez, Lady Gaga, Jennifer Lopez.
          </p>
        </div>
      </div>
    )
  }
}

export default Details
