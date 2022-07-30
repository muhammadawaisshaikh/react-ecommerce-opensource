import React from 'react';
import Style from './style';

function Homepage() {
  const classes = Style();

  return (
    <div>
        <h1 className={classes.h1}>Homepage</h1>
    </div>
  );
}

export default Homepage;