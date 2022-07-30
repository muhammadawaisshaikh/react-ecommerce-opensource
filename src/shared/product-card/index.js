import * as React from 'react';
import Style from './style';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function ProductCard(_props) {
    const classes = Style();
    const product = _props.data;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Typography gutterBottom variant="h6">{product.title}</Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography gutterBottom variant="h5" align='right'>
                            <strong>$</strong>
                            <span>{product.price}</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;