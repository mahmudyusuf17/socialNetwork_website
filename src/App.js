// import logo from './logo.svg';
// import './App.css';
// import { lazy, Suspense } from 'react';

// const Home = lazy(() => import('./pages/Home'));
// const Header = lazy(() => import('./components/layouts/Headers'));
// const Navbar = lazy(() => import('./components/layouts/Navbar'));
// const Footer = lazy(() => import('./components/layouts/Footer'));

// function App() {
//   return (
//     <Suspense fallback={null}>
//       <Header />
//       <Navbar />
//       <Home />
//       <Footer />
//     </Suspense>
//   );
// }

import React, { Component, Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/layouts/Headers'));
const Navbar = lazy(() => import('./components/layouts/Navbar'));
const Footer = lazy(() => import('./components/layouts/Footer'));

function App() {
  return (
    <Suspense fallback={null}>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </Suspense>
  );
}

export default App;
