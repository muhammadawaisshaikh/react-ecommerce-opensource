import React from 'react';
import ProductCard from '../../shared/product-card';
import Style from './style';
import { Grid, Container } from '@mui/material';

function Products() {
  const classes = Style();

  const data = [
    {
      title: "ABC Product",
      image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
      price: 999,
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      title: "DEF Product",
      image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
      price: 999,
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      title: "GHI Product",
      image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
      price: 999,
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      title: "JKL Product",
      image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
      price: 999,
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      title: "MNO Product",
      image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
      price: 999,
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
  ]

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {data.map((item, i) => 
            <Grid item xs={12} md={3}>
              <ProductCard key={i} data={item} />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Products;