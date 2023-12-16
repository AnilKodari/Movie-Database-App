import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PopularMovies from './component/PopularMovie'
import './App.css'

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={PopularMovies} />
        <Route path="/top-rated" component={PopularMovies} />
        <Route path="/upcoming" component={PopularMovies} />
      </Switch>
    </Router>
  </>
)

export default App
