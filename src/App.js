import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LoadingSpinner from './components/Loading/LoadingSpinner';
import Product from "./components/Product/Product";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Router>
            <Navbar />
            <Product />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes> 
            <Footer />
        </Router>
      )}
    </React.Fragment>
  );
}

export default App;
