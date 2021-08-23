import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { connect } from 'react-redux';
import {handleCategory } from '../store/products';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Categories(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const classes = useStyles();
  return (
    <>
     <Paper style={{marginTop:'1rem'}} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Men's Fashion" />
        <Tab label="Women's Fashion" />
      </Tabs>
    </Paper> 
    </>
  )
}

const mapStateToProps = (state) => {
  return state;
};
const dispatchToProps = {handleCategory};

export default connect(mapStateToProps, dispatchToProps)(Categories);
