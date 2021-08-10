import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProdcut from '../components/Admin/AddProdcut';
import EditProduct from '../components/Admin/EditProduct';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import ProductList from '../components/ProductList/ProductList';
import ContextProvider from '../contexts/Context';

const Routes = () => {
    return (
       <BrowserRouter>
       <ContextProvider>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/productlist" component={ProductList}/>
            <Route exact path="/addproduct" component={AddProdcut}/>
            <Route exact path="/edit/:id" component={EditProduct}/>
            <Route exact path="/cart" component={Cart}/>
        </Switch>
       </ContextProvider>
       </BrowserRouter>
    );
};

export default Routes;