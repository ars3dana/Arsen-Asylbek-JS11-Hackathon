import axios from 'axios';
import React, { useReducer } from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ACTIONS, JSON_API_BOXS, JSON_API_ITEMS } from '../helpers/consts';
import { calcSubPrice, calcTotalPrice } from '../helpers/function';

export const productContext = createContext()
export const useProducts = () => {
    return useContext(productContext)
}

const INIT_STATE = {
    boxsData: [],
    itemsData: [],
    newsData: [],
    productDetails: [],
    cart: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case ACTIONS.GET_BOX: 
            return {...state, boxsData: action.payload}
        case ACTIONS.GET_ITEM:
            return {...state, itemsData: action.payload}
        case ACTIONS.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload };
        case ACTIONS.GET_CART:
            return {...state, cart: action.payload}
         default:
          return state
    }
}
const ContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( reducer, INIT_STATE )
    const history = useHistory();

    const getBoxsData = async() => {
        const { data } = await axios(JSON_API_BOXS)
        dispatch({
            type: ACTIONS.GET_BOX,
            payload: data
        })
    }
    
    const getItemsData = async () => {
        const { data } = await axios(JSON_API_ITEMS)
        dispatch({
            type: ACTIONS.GET_ITEM,
            payload: data
        })
    }
    const addBox = async(product) => {
        console.log(product)
        const data = await axios.post(JSON_API_BOXS, product)
        getBoxsData()
    }
    const deleteProduct = async (id) => {
        const data = await axios.delete(`${JSON_API_BOXS}/${id}`);
        getBoxsData()
    }
    const saveEditedProduct = async (id, product) => {
        const data = await axios.patch(`${JSON_API_BOXS}/${id}`, product);
        history.push('/productlist');
    }
    const getProductDetails = async (id, type) => {
        const { data } = await axios(`${JSON_API_BOXS}/${id}`);
        console.log(data);
        dispatch({
          type: ACTIONS.GET_PRODUCT_DETAILS,
          payload: data,
        });
      };
      const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
          localStorage.setItem(
            'cart',
            JSON.stringify({
              products: [],
              totalPrice: 0,
            })
          );
          cart = {
            products: [],
            totalPrice: 0,
          };
        }
        dispatch({
          type: ACTIONS.GET_CART,
          payload: cart,
        });
      };
    
      const addProductToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
          cart = {
            products: [],
            totalPrice: 0,
          };
        }
        let newProduct = {
          item: product,
          count: 1,
          subPrice: +product.price,
        };
    
        console.log(newProduct);
    
        let productToFind = cart.products.filter((item) => item.item.id === product.id);
        if (productToFind.length == 0) {
          cart.products.push(newProduct);
        } else {
          cart.products = cart.products.filter((item) => item.item.id !== product.id);
        }
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({
          type: ACTIONS.GET_CART,
          payload: cart,
        });
      };
      const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map((product) => {
          if (product.item.id === id) {
            product.count = count;
            product.subPrice = calcSubPrice(product);
          }
          return product;
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({
          type: ACTIONS.GET_CART,
          payload: cart,
        });
      };
    const value = {
        boxsData: state.boxsData,
        productDetails: state.productDetails,
        history,
        itemsData: state.itemsData,
        cart: state.cart,
        addProductToCart,
        getCart,
        getBoxsData,
        changeProductCount,
        addBox,
        deleteProduct,
        getProductDetails,
        saveEditedProduct,
        getItemsData,
    }
    return (
        <productContext.Provider value={value}>
            { children }
        </productContext.Provider>
    );
};

export default ContextProvider;