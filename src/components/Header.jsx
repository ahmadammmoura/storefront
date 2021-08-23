import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles
} from '@material-ui/core';

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Our Store
          </Typography>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
