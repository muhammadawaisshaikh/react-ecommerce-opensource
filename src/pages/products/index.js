import React from 'react';
import Style from './style';

function Products() {
  const classes = Style();

  return (
    <div>
        <h1 className={classes.h1}>Products</h1>
    </div>
  );
}

export default Products;