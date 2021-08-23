import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
function Products() {
  const classes = useStyles();

  return (
    <>
      <Card style={{margin:'3rem'}} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
      </Card>
    </>
  );
}

export default Products;
