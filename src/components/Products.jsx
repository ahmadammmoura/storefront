import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux'
import {addCart} from '../store/actions/'

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
  },
  media: {
    height: 330,
  },
});
function Products(props) {
  const state = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log(state)
  const classes = useStyles();
  return (
    <>
      {state.products.map(product => <Card style={{margin:'3rem',float:'left'}} key={product.id} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={()=> dispatch(addCart(product)) } size="small" color="primary">
            add to Cart
          </Button>
          <Button size="small" color="primary">
            More info
          </Button>
        </CardActions>
      </Card>)}
    </>
  );
}

export default Products;
