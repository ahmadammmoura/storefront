import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux';
import { handleCategory, loadcategorys } from '../store/actions/index';

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

  useEffect(()=>{
    props.handleCategory('men')
  },[])

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
          props.categorys.categoryList.map((cata) => {
            return (
              <Tab
                key={cata.displayName}
                label={cata.displayName}
                onClick={() => props.handleCategory(cata.name)}
              />
            );
          })
          }
        </Tabs>
      </Paper>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = { handleCategory, loadcategorys };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
