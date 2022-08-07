import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import RouterProvider from './core/routes/RouterProvider';
import Header from './layout/header';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        
        <div style={{paddingTop: '2rem'}}>
          <RouterProvider />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
