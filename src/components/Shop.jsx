import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import Data from "../data/data.json"
import Context from "./Context";
import Search from "./Search";
import { message} from 'antd';

function Shop (){

    const {cart, setCart, searchValue} = useContext(Context)
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

        const success = () => {
            message.success('Товар добавлен в корзину');
        };

       if(cart.length === 0){
           product.count = 1
           cart.push(product)
           success()
        }else if (checkAddToCart(product) !== -1){
            cart[checkAddToCart(product)].count +=1
            success()
        }else{
            product.count = 1
            cart.push(product)
            success()
        }
        setCart([...cart])
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div className="shop">
            <div className="container">
                <div className="catalog">
                    <Search/>
                    <ul className="catalog__items">
                        {data.filter((item)=>{
                            if(searchValue.length === 0){
                                return item
                            }else if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
                                return item
                            }   
                        }).map((product,index) =>{
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