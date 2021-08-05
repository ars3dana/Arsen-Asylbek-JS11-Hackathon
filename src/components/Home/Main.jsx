import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme =>({
    background: {
        background: `url(${'https://nechytailo.fund/images/%D0%9F%D0%BE%D0%BC%D0%BE%D1%89%D1%8C_%D0%BB%D1%8E%D0%B4%D1%8F%D0%BC/%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C_%D0%BB%D1%8E%D0%B4%D1%8F%D0%BC.jpg'}) no-repeat`,
        width: '98vw',
        height: 600,
        backgroundSize: '100%'

    },
    title: {
        color: 'white',
        fontSize: 90
    },
    title3:{
        color: '#212121',
        fontSize: 70,
    },
    position: {
        height:600,
        textAlign: 'center'
    }
}))
const Main = () => {
    const classes = useStyles()
    return (
        <div className={classes.background}>
           <Container className={classes.position}>
            <h1 className={classes.title}>Добро спасает Мир</h1>
           
            <h3 className={classes.title3}>Помоги людям стать добрее</h3>
           </Container>
        </div>
    );
};

export default Main;