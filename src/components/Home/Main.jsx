import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { color } from '../../helpers/consts';

const useStyles = makeStyles((theme)=> ({
    main: {
        height:'600px',
    },
    title: {
        fontSize: 65,
        fontFamily: 'Roboto',
        fontWeight: 900,
        textShadow: '9px 18px 23px rgba(0,0,0,9)',
        color: color,

    }
}))
const Main = () => {
    const classes = useStyles()
    return (
        <Grid container alignItems="center" justify="center" className={classes.main}>
            <Typography className={classes.title}>
                ПОМОГАЙ И УЛУЧШАЙ МИР
            </Typography>
        </Grid>
    );
};

export default Main;