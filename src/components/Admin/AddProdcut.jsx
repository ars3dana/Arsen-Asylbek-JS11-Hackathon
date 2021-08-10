import React, { useState } from 'react';
import { Button, Container, makeStyles, Paper, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
// import { useProducts } from '../contexts/ProductContext';
import CancelIcon from '@material-ui/icons/Cancel';
import { useProducts } from '../../contexts/Context';

const useStyles = makeStyles(theme => ({

    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 800,
    },
    title: {
        textAlign: 'center',
        color: 'grey',

    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        color: 'black'
    },
    form: {
        display: 'flex',
        flexDirection: 'column' 
    },
    textfield: {
        marginTop: 10
    }

}))
const AddProdcut = () => {
    const classes = useStyles()
    const { addBox } = useProducts()

   const handleClick = (product) => {
      const data  = addBox(product)
   }
   const [product, setProduct] = useState({
        title: "",
        description: "",
        type: "",
        image: "",
        price: 0,
   })
   const handleInp = (e) => {
    let obj = {
        ...product,
        [e.target.name]: e.target.value,
    };
    setProduct(obj)
   }

    return (
        <Paper className={classes.paper}elevation={3}>
        <h1 className={classes.title}>Add Product</h1>
        <Container className={classes.container}>
            <form className={classes.form}noValidate autoComplete='off'>
             <TextField
             name='title'
             variant="outlined"
             label="title"
             onChange={handleInp}
             className={classes.textfield}
             />
             <TextField
             name='description'
             variant="outlined"
             label="Description"
             onChange={handleInp}
             className={classes.textfield}              
             />
             <TextField
             name='type'
             variant="outlined"
             label="Type"
             onChange={handleInp}
             className={classes.textfield}

             />
             <TextField
             name='image'
             variant="outlined"
             label="Image URL"
             onChange={handleInp}
             className={classes.textfield}
             />
             <TextField
             name='price'
             variant="outlined"
             label="Price"
             onChange={handleInp}   
             className={classes.textfield}
             />
             <Container>
             <Button 
             onClick={() => handleClick(product)}
             >
                 <SaveIcon/>
             </Button>
             <Button 
            //  onClick={}
             >
                 <CancelIcon/>
             </Button>
             </Container>
            </form>
        </Container>
     </Paper>
    );
};

export default AddProdcut;