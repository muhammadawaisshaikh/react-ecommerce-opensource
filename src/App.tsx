import React from 'react';
import Button from '@mui/material/Button';
import { AccessAlarm } from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <AccessAlarm />
    </div>
  );
}

export default App;
