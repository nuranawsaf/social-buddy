import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comment from './components/Comment/Comment';

const App = () => {
  return (
    <div>
        <Router>
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
               <Route exact path="/">
                <Home/>
              </Route>
                 <Route exact path="/comment">
                    <Comment></Comment>
                 </Route>
            </Switch>
          </Router>
    </div>
  );
};

export default App;
