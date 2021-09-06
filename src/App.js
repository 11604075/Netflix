import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/Navbar/NavBar';
import RowPost from './components/RowPost/RowPost';

import {action,orginals} from './urls'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={orginals} title="Netflix Originals"/>
     <RowPost url={action} title="Action" isSmall/>
    </div>
  )
}

export default App;
