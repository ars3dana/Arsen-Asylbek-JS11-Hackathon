import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import Info from './Info';
import Main from './Main';
import News from './News';

const useStyles = makeStyles((theme) => ({
   
  }));

const Home = () => {

    const classes = useStyles()
  
    return (
        <div>
        <Main/>
        </div>
    );
};

export default Home;