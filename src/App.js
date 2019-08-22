// Core
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import {
    Header,
    Feed,
    Footer
} from './components';

function App () {
    return (
        <div className = 'App'>
            <Header />
            {/* <Feed /> */}
            <Route component = { Feed } path = '/?page=:number' />
            <Route component = { Feed } path = '/' />
            <Footer />
        </div>
    );
}

export default App;
