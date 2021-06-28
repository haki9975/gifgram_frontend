import './App.css';
import React from 'react';
 import { Provider } from 'react-redux';
 import store from './redux/store';
import Posts from './components/Posts';
import NavBar from './components/Navbar';
import Postform from './components/Postform';
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"





function App() {
  return (
    <Provider store={store} >
     <div className="App">
        <Router>
         <NavBar></NavBar>
          <Switch>
            <Route path="/home" component={ Home } />
              
            <Route path="/posts" component={ Posts } />
                       
            <Route path="/post/new" component={ Postform } />
            

            <Route path="/" component={ Home } />

          </Switch>
        </Router>
     </div>
     </Provider >
  );
}

export default App;
