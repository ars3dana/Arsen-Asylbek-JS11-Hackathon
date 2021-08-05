import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

        </Switch>
       </ContextProvider>
       </BrowserRouter>
    );
};

export default Routes;