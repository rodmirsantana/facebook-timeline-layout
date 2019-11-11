import React from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper-content content">
        <PostList />
      </div>
    </>
  );
}

export default App;
