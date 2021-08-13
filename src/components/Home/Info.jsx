import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    back: {
        fontSize: '25px',
        backgroundColor: 'rgb(56,40,23,0.6)'
    }
}))
const Info = () => {
    const classes = useStyles()
    return (
        <Container className={classes.back}>
            <Typography className={classes.back}>
                World Helper - Компания которая помогает людям, которые нуждаются в помощи. Помощь идет посредством пожертвования, которые вы можете найти у нас на странице. Наша компания ценит любую помощь. World Helper работает с 2015 года и помогла более 100 000 семьям и построило 8 домов. 
            </Typography>
        </Container>
    );
};

export default Info;