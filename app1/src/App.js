import React from 'react';
import './App.css';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Main from './components/Main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
