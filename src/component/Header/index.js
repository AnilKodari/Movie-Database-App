// import {Link} from 'react-router-dom'
// import './index.css'

// const Header = ({onCategoryChange}) => (
//   <>
//     <div className="movie-container">
//       <div className="movie">
//         <h1>movieDB</h1>
//       </div>
//       <div className="popular-container">
//         <Link
//           to="/"
//           className="name"
//           onClick={() => onCategoryChange('Popular')}
//         >
//           Popular
//         </Link>
//         <Link
//           to="/top-rated"
//           className="name"
//           onClick={() => onCategoryChange('Top Rated')}
//         >
//           Top Rated
//         </Link>
//         <Link
//           to="/upcoming"
//           className="name"
//           onClick={() => onCategoryChange('Upcoming')}
//         >
//           Upcoming
//         </Link>
//       </div>
//     </div>
//   </>
// )

// export default Header
// Header.js

import {Link} from 'react-router-dom'
import './index.css'

const Header = ({
  onCategoryChange,
  onSearchChange,
  onSearchSubmit,
  searchQuery,
}) => (
  <>
    <div className="movie-container">
      <div className="movie">
        <h1>movieDB</h1>
      </div>
      <div className="popular-container">
        <Link
          to="/"
          className="name"
          onClick={() => onCategoryChange('Popular')}
        >
          Popular
        </Link>
        <Link
          to="/top-rated"
          className="name"
          onClick={() => onCategoryChange('Top Rated')}
        >
          Top Rated
        </Link>
        <Link
          to="/upcoming"
          className="name"
          onClick={() => onCategoryChange('Upcoming')}
        >
          Upcoming
        </Link>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={onSearchChange}
        />
        <button type="button" onClick={onSearchSubmit}>
          Search
        </button>
      </div>
    </div>
  </>
)

export default Header
