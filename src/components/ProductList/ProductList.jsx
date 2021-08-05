import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/Context';
import BoxList from './BoxList';
import ItemList from './ItemList';

const ProductList = () => {
    const { boxsData, getBoxsData } = useProducts()
    
    return (
        <div>
            <BoxList/>
            <ItemList/>
        </div>
    );
};

export default ProductList;