import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Fixed import
import WorkoutSessions from "./components/WorkoutSession"; // Fixed import
import Gallery from "./components/Gallery"; // Fixed import
import Pricing from "./components/Pricing"; // Fixed import
import Contact from './components/Contact'; // Default import
import BMICalculator from "./components/BMICalculator"; // Fixed import
import Footer from "./components/Footer"; // Fixed import

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center'/> {/* Added ToastContainer here */}
    </Router>
  );
};

export default App;
