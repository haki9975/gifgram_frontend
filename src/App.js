import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
import Comments from './components/Comments';
import Commentform from './components/Commentform';


const store = createStore(() => [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
     <div className="App">
       <Posts />
        <Postform />
        <Comments />
        <Commentform />
      </div>
    </Provider >
  );
}

export default App;
