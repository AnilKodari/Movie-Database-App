// // PopularMovies.js
// import {Component} from 'react'
// import PopularMoviesCard from '../PopularMoviescard'
// import Header from '../Header'
// import './index.css'

// const apiStatus = [
//   {id: 'Popular', name: 'popular'},
//   {id: 'Top Rated', name: 'top_rated'},
//   {id: 'Upcoming', name: 'upcoming'},
// ]

// class PopularMovies extends Component {
//   state = {
//     moviesList: [],
//     currentCategory: 'popular',
//     searchQuery: '',
//   }

//   componentDidMount() {
//     this.getMovies()
//   }

//   getMovies = async () => {
//     const {currentCategory, searchQuery} = this.state
//     const baseUrl = 'https://image.tmdb.org/t/p/w500'
//     const apiKey = 'd9969545f74a22bdc74cdbd4c7ab5a28'

//     let apiUrl
//     if (searchQuery) {
//       apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${searchQuery}`
//     } else {
//       apiUrl = `https://api.themoviedb.org/3/movie/${currentCategory}?api_key=${apiKey}&language=en-US&page=1`
//     }

//     const options = {
//       method: 'GET',
//     }
//     const response = await fetch(apiUrl, options)

//     if (response.ok) {
//       const data = await response.json()
//       const updatedMovies = data.results.map(movie => ({
//         id: movie.id,
//         posterPath: `${baseUrl}${movie.poster_path}`,
//         title: movie.title,
//         rating: movie.vote_average,
//         backdropPath: movie.backdrop_path,
//       }))
//       this.setState({
//         moviesList: updatedMovies,
//       })
//     }
//   }

//   handleCategoryChange = category => {
//     const matchingStatus = apiStatus.find(status => status.id === category)
//     if (matchingStatus) {
//       this.setState({currentCategory: matchingStatus.name}, () => {
//         this.getMovies()
//       })
//     }
//   }

//   handleSearchChange = event => {
//     this.setState({searchQuery: event.target.value})
//   }

//   handleSearchSubmit = () => {
//     this.getMovies()
//   }

//   render() {
//     const {moviesList, searchQuery} = this.state
//     return (
//       <>
//         <Header
//           onCategoryChange={this.handleCategoryChange}
//           onSearchChange={this.handleSearchChange}
//           onSearchSubmit={this.handleSearchSubmit}
//           searchQuery={searchQuery}
//         />
//         <ul className="movie-list">
//           {moviesList.map(movie => (
//             <PopularMoviesCard movieDetails={movie} key={movie.id} />
//           ))}
//         </ul>
//       </>
//     )
//   }
// }

// export default PopularMovies
// PopularMovies.js
// PopularMovies.js

import {Component} from 'react'
import PopularMoviesCard from '../PopularMoviescard'
import Header from '../Header'
import './index.css'

const apiStatus = [
  {id: 'Popular', name: 'popular'},
  {id: 'Top Rated', name: 'top_rated'},
  {id: 'Upcoming', name: 'upcoming'},
]

class PopularMovies extends Component {
  state = {
    moviesList: [],
    currentCategory: 'popular',
    searchQuery: '',
    currentPage: 1,
    totalPages: 1,
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const {currentCategory, searchQuery, currentPage} = this.state
    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    const apiKey = 'd9969545f74a22bdc74cdbd4c7ab5a28'

    let apiUrl
    if (searchQuery) {
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&query=${searchQuery}`
    } else {
      apiUrl = `https://api.themoviedb.org/3/movie/${currentCategory}?api_key=${apiKey}&language=en-US&page=${currentPage}`
    }

    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedMovies = data.results.map(movie => ({
        id: movie.id,
        posterPath: `${baseUrl}${movie.poster_path}`,
        title: movie.title,
        rating: movie.vote_average,
        backdropPath: movie.backdrop_path,
      }))
      this.setState({
        moviesList: updatedMovies,
        totalPages: data.total_pages,
      })
    }
  }

  handleCategoryChange = category => {
    const matchingStatus = apiStatus.find(status => status.id === category)
    if (matchingStatus) {
      this.setState(
        {currentCategory: matchingStatus.name, currentPage: 1},
        () => {
          this.getMovies()
        },
      )
    }
  }

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  handleSearchSubmit = () => {
    this.getMovies()
  }

  handlePageChange = page => {
    const {currentPage, totalPages} = this.state
    if (currentPage !== page && page > 0 && page <= totalPages) {
      this.setState({currentPage: page}, () => {
        this.getMovies()
      })
    }
  }

  render() {
    const {moviesList, searchQuery, currentPage, totalPages} = this.state
    return (
      <>
        <Header
          onCategoryChange={this.handleCategoryChange}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
          searchQuery={searchQuery}
        />
        <ul className="movie-list">
          {moviesList.map(movie => (
            <PopularMoviesCard movieDetails={movie} key={movie.id} />
          ))}
        </ul>
        <p>{`Page ${currentPage}`}</p>

        <div className="pagination">
          <button
            type="button"
            onClick={() => this.handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <p>{currentPage}</p>
          <button
            type="button"
            onClick={() => this.handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </>
    )
  }
}

export default PopularMovies
