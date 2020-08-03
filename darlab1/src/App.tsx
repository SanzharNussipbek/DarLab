import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import './App.scss';
import { Home } from "./pages/home/Home"
import { Posts } from "./pages/posts/Posts"
import { PostDetail } from './pages/postDetail/PostDetail'
import { Login } from "./pages/login/Login"
import { Room } from "./pages/room/Room"
import { UserInfo } from "./types/Interfaces"
import { UserContext } from './services/context';
import { Videos } from './pages/videos/Videos';

function App() {

  const [user, setUser] = useState<UserInfo | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <div className="App">
          <div className="App-navigation">
            <div className="logo-wrapper">
              <Link to="/"><img src="/dar_logo.png"/></Link>
            </div>
            
            <div className="links-wrapper">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/room/:id">Room</Link>
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
                {/* <li>
                  <Link to="/login">Login</Link>
                </li> */}
              </ul>
            </div>
          </div>

          <main className="App-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/posts" component={Posts}/>
              <Route exact path="/posts/:id" component={PostDetail}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/room/:id" component={Room}/>
              <Route exact path="/videos" component={Videos}/>
              <Route path="*">
                <h1 className="not-found">Error #404: Page Not Found</h1>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
