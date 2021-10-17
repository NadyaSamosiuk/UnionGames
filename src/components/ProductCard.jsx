import React, { useContext } from "react";
import { useLocation } from "react-router";
import Context from "./Context";
import { message, Button} from 'antd';

function ProductCard(){
    const loc = useLocation()
    const {title, id,description, banner, price, video} = loc.state.product
    const {cart, setCart} = useContext(Context)
    const product=loc.state.product
        
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
    
    return(
        <>
            <div className="product">
                <div className="product__banner"><img src={banner} alt="baner"/></div>
                <div className="product__card">
                    <h2 className="product__card__title">{title}</h2>
                    <div className="product__card__subtitle">PS4</div>
                    <p className="product__card__price">{price} p.</p>
                    <div className="product__card__add">
                        <Button className="product__card__add__btn" onClick={()=>{addToCart(product)}} id={id}>Добавить в корзину</Button>
                    </div>
                </div>
                <div className="container">
                    <div className="prtoduct__description">
                        <p className="product__description__content">{description}</p>
                        <div className="product__description__video">
                        <iframe width="645" height="400" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard