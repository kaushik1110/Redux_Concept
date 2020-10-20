import React, { Component } from 'react'
import { showCart } from './action';
import {useDispatch} from 'react-redux';
import {showCart} from './action'; 


const Header=()=> {
    const dispatch = useDispatch();
    const handleOnlcick = () =>{
      dispatch(showCart);
    };
        return (
            <div>
                <button onClick={handleOnlcick}>Save</button>
            </div>
        )
    }


export default header
