import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    border: {
        width: '200px',
        height: '250px',
        border: '3px solid black',
        padding: '9px',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '177px',
        height: '120px',
        border: '3px solid black',
        
    }
}))
const BoxCard = ({box}) => {
    const classes = useStyles()
    return (
        <Container className={classes.border}>
            <Grid  className={classes.image}>
                <img src={box.image} alt="" />
            </Grid>
            <Typography variant="h6"align="center" color="inherit">
                {box.title}
            </Typography>
            <Typography align="center" >
                {box.description}
            </Typography>
        </Container>
    );
};

export default BoxCard;