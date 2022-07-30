import React from 'react';
import Style from './style';

function SideMenu() {
    const classes = Style();

  return (
    <div>
        <h1 className={classes.highlight}>SideMenu</h1>
    </div>
  );
}

export default SideMenu;