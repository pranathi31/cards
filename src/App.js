import React from 'react';
import './App.css';
import Desktopheader from './containers/Header';
import Product from './Pages/Product';
import Mobileheader from './containers/Mobileheader';
function App() {
  return (
    <div className="App">
      {window.innerWidth <= 800 ?
        <Mobileheader /> :
        <Desktopheader />
      }

      <br />
      <div className='content-container'>
        <Product />
      </div>
    </div>
  );
}

export default App;
