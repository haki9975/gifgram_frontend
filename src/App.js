import './App.css';
import React from 'react';
 import { Provider } from 'react-redux';
 import store from './redux/store';
import Posts from './components/Posts';
import NavBar from './components/Navbar';
import Postform from './components/Postform';

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
            
            <Posts />
            <Postform />

          </Switch>
        </Router>
     </div>
     </Provider >
  );
}

export default App;
