import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { useProducts } from '../../contexts/Context';

const useStyles = makeStyles((theme) => ({
    
    border: {
        width: '200px',
        height: '300px',
        border: '3px solid black',
        padding: '9px',
        
    },
    body: {
        overflow: 'hidden',
        height: '236px'
    },
    image: {
        width: '177px',
        height: '120px',
        border: '3px solid black',
        
    },
    img: {
        width: '100%',
        height: '100%'
    }
}))
const BoxCard = ({box}) => {
    const { deleteProduct, history, addProductToCart } = useProducts()
    const classes = useStyles()
    return (
        <Container align='center' className={classes.border}>
            <div className={classes.body}>
            <Grid  className={classes.image}>
                <img className={classes.img} src={box.image} alt={box.title} />
            </Grid>
            <Typography variant="h6"align="center" color="inherit">
                {box.title}
            </Typography>
            <Typography align="center" >
                {box.description}
            </Typography>

            </div>
            <Container align="center">

            <Button variant="outlined" color="primary">{box.price}$</Button>
            <DeleteIcon onClick={() => deleteProduct(box.id)} />
            <CreateIcon onClick={() => history.push(`/edit/${box.id}`)}/>
            <ShoppingCartOutlinedIcon onClick={() => addProductToCart(box)}/>
            </Container>
        </Container >
    );
};

export default BoxCard;