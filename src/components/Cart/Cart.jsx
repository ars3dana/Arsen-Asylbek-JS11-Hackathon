import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Tab, Typography } from '@material-ui/core';
import { useProducts } from '../../contexts/Context';
import { useEffect } from 'react';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableCellImg: {
      width: 50,
    },
  });

const Cart = () => {
  
  const classes = useStyles();
  const { cart,getCart, changeProductCount } = useProducts()
  useEffect(() => {
    getCart()
  })
  const handleCountChange = (count, id) => {
    changeProductCount(count, id);
  };
    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">SubPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products?.length > 0 &&
            cart.products.map((product) => (
              <TableRow key={product.item.id}>
                <TableCell>
                  <img className={classes.tableCellImg} src={product.item.image} alt={product.item.title} />
                </TableCell>
                <TableCell align="right">{product.item.title}</TableCell>
                <TableCell align="right">{product.item.price}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    value={product.count}
                    onChange={(e) => handleCountChange(e.target.value, product.item.id)}
                  />
                </TableCell>
                <TableCell align="right">{product.subPrice}</TableCell>
              </TableRow>
            ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              <Typography variant="h5">Total:</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5">{cart.totalPrice}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Cart;