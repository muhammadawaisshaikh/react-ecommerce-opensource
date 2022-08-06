import React from 'react';
import { Grid, Container } from '@mui/material';
import Style from './style';
import ProductCard from '../../shared/product-card';
import { products } from '../../mock/products';

function Products() {
  const classes = Style();
  const data = products;

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {data.map((item, i) => 
            <Grid item xs={12} md={3} key={i}>
              <ProductCard data={item} />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Products;