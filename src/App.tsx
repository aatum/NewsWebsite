import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from './components/Routes';
import Navbar from './components/NavBar';
import Footer from './components/Footer';


//rendering navbar, routes and footer in the app
export default function App(){
return (
  <Router>
    <Navbar />
    <Routes>
      {routes.map((route) => (
        <Route
        key={route.key}
        path={route.path}
        element={<route.component />}
        />
      ))}
    </Routes>
    <Footer />
  </Router>

  );
}

