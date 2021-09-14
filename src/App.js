import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import RegisterUser from './pages/RegisterUser'
import About from './pages/AboutUser'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <RegisterUser />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
