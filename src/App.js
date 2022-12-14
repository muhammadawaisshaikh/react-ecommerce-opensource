import React from 'react';
import './App.css';
import RouterProvider from './core/routes/RouterProvider';
import Header from './layout/header';

function App() {
  return (
    <div>
      <Header />
      <RouterProvider />
    </div>
  );
}

export default App;
