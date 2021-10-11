import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import Data from "../data/data.json"
import Context from "./Context";


function Shop (){

    const {cart, setCart} = useContext(Context)
    const [data, setProducts] = useState(JSON.parse(localStorage.getItem('data')) || [])

    useEffect(()=>{
        if(!localStorage.getItem('data')){
        setProducts([...Data])
        localStorage.setItem('data', JSON.stringify(Data))
        }
    },[])

    function checkAddToCart (product){
        const productStatus = cart.findIndex((item)=> item.id === product.id)
        return productStatus
    }

    function addToCart (product){
       if(cart.length === 0){
           product.count = 1
           cart.push(product)
        }else if (checkAddToCart(product) !== -1){
            cart[checkAddToCart(product)].count +=1
        }else{
            product.count = 1
            cart.push(product)
        }
        setCart([...cart])
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
    }

    return (
        <div className="shop">
            <div className="container">
                <div className="catalog">
                    <div className="catalog__widget">
                        <input type='text' id="catalog__widget__value" placeholder="Поиск"/>
                    </div>
                    <ul className="catalog__items">
                        {data.map((product,index) =>{
                            return(
                              <Product
                              product={product}
                              addToCart={addToCart}
                              key={index}
                              />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Shop