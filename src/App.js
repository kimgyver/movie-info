import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


class App extends Component {
  state = {
  }

  componentDidMount() {
    this._getMovies()

    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       ...this.state.movies,
    //       {
    //         title: "Trainsporting",
    //         poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    //       }
    //     ]
    //   })
    // }, 1000);
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi() {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'} 
      </div>
    );
  }
}

export default App;