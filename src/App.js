import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/App.css';

function App() {
  return (
    <BrowserRouter basename="/app-itviec">
    <div className="App">
      <Header />
      <Routes>  
        <Route path="/" element={HomePage} />
        {/* <Route path="/jobs" element={<JobPage />} />
        <Route path="/companies" element={<CompanyPage />} />*/}
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
