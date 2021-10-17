import React from "react";
import { useHistory } from 'react-router-dom';
import {Button} from 'antd';

function Product ({product, addToCart}){
    const history = useHistory()
   
    function heandlerProductView(){
        history.push(`product_${product.id}`,{
            product           
        })
    }

    return(
        <li className="catalog__item">
            <div className="catalog__item__img">
                <img src={product.picture} alt={product.title}/>
            </div>
            <div className="catalog__caption">
                <div className="catalog__caption__name" onClick={()=>{heandlerProductView()}}>{product.title}</div>
                <div className="catalog__caption__price">{product.price} p.</div>
                <div className="catalog__caption__btn">
                    <Button  onClick={()=>{addToCart(product)}} id={product.id}>+</Button>
                </div>
            </div>
        </li>
    )
}

export default Product