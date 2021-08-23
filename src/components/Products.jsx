import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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
    maxWidth: 300,
  },
  media: {
    height: 345,
  },
});
function Products(props) {
  const classes = useStyles();
  console.log(props.products.products)
  return (
    <>
      {props.products.products.map(product => <Card style={{margin:'3rem',float:'left'}} key={product.id} className={classes.root}>
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
          <Button size="small" color="primary">
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
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Products);
