import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import Postform from './components/Postform';
import Comments from './components/Comments';
import Commentform from './components/Commentform';

function App() {
  return (
    <div className="App">
      <Posts />
      <Postform />
      <Comments />
      <Commentform />
    </div>
  );
}

export default App;
