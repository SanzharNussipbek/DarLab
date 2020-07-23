import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import './App.scss';
import { Home } from "./pages/home/Home"
import { Posts } from "./pages/posts/Posts"

// ToDo:
// - New route with /posts/:id and PostDetails for each post using Router
// - ReactTransitionGroup for animation of buttons
// - Fix the style
// - Component for avatar
function App() {

  return (
    <Router>
      <div className="App">
        <nav className="App-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/posts">
              <Posts />
            </Route>

            <Route path="*">
              <h2>Not Found</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
