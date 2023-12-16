import './index.css'

const PopularMoviesCard = props => {
  const {movieDetails} = props
  const {id, title, rating, posterPath} = movieDetails
  return (
    <li className="movies-list" key={id}>
      <div className="movie">
        <div>
          <img src={posterPath} alt={title} className="image" />
        </div>
        <div>
          <h1 className="heading">{title}</h1>
          <p className="rating">{rating}</p>

          <button type="button" className="button">
            View Details
          </button>
        </div>
      </div>
    </li>
  )
}
export default PopularMoviesCard
