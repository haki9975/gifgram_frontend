import './App.css';
import React from 'react';
 import { Provider } from 'react-redux';
 import store from './redux/store';
import Posts from './components/Posts';
import Postform from './components/Postform';
import Home from './components/Home'
import about from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import  MenuAppBar  from './components/AppBar'
import Grid from "@material-ui/core/Grid"




function App() {
  return (
    <Provider store={store} >
     <div className="App">
        <Router>
         <MenuAppBar />
           <Grid container justify='center'>
          <Switch>
            <Route path="/home" component={ Home } />
            <Route path="/posts" component={ Posts } />
            <Route path="/post/new" component={ Postform } />
            <Route path="/about" component={ about } />
            <Route path="/" component={ Home } />
          </Switch>
           </Grid>
        </Router>
     </div>
     </Provider >
  );
}

export default App;
