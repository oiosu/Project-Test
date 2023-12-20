import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import Nav from './components/MainPage/Nav';
import Footer from './components/MainPage/Footer';
import Empty from './components/Basket/Empty';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/empty' element={<Empty />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;