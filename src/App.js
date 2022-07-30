import React from 'react';
import './App.css';
import RouterProvider from './core/routes/RouterProvider';
import Header from './layout/header';

function App() {
  return (
    <div>
      <Header />
      
      <div style={{paddingTop: '2rem'}}>
        <RouterProvider />
      </div>
    </div>
  );
}

export default App;
