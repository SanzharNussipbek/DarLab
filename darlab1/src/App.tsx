import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import './App.scss';
import { Home } from "./pages/home/Home"
import { Posts } from "./pages/posts/Posts"
import { PostDetail } from './pages/postDetail/PostDetail'
import { Login } from "./pages/login/Login"
import { Chat } from "./pages/chat/Chat"

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
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/posts/:id" component={PostDetail}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/chat" component={Chat}/>
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
