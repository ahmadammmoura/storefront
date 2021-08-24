import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector, useDispatch } from 'react-redux';

import { handleCategory } from '../store/actions/index';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Categories() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const state = useSelector((state) => state.categorys);

 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(handleCategory('men'))
  },[dispatch])

  const classes = useStyles();
  return (
    <>
      <Paper style={{ marginTop: '1rem' }} className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {
          state.categoryList.map((cata) => {
            return (
              <Tab
                key={cata.displayName}
                label={cata.displayName}
                onClick={() => dispatch(handleCategory(cata.name))}
              />
            );
          })
          }
        </Tabs>
      </Paper>
    </>
  );
}


export default Categories;
