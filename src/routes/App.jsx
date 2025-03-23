import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import '../styles/App.css';

/**
 * Main App component with shared layout
 * Provides the common structure for all pages with navigation and footer
 */
const App = () => {
  return (
    <div>
      {/* Navigation bar - appears on all pages */}
      <Navbar />
      
      {/* Dynamic content from child routes */}
      <Outlet/>
      
      {/* Footer - appears on all pages */}
      <Footer />
    </div>
  );
};

export default App;