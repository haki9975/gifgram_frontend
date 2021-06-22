import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Posts from './components/Posts';
import Postform from './components/Postform';
import Comments from './components/Comments';
import Commentform from './components/Commentform';




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
