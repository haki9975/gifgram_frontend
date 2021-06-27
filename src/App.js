import './App.css';
import React from 'react';
 import { Provider } from 'react-redux';
 import store from './redux/store';
import Posts from './components/Posts';
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
       <Posts />
        <Postform />
     </div>
     </Provider >
  );
}

export default App;
