// Core
import React from 'react';
import './App.css';

// Components
import {
  Header,
  Feed,
  Footer
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
