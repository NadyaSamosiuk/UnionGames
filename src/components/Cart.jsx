import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "./Context";

function Cart () {
    const {cart, setCart} = useContext(Context)

    function getTotalPrice(){
        let totalPrice = 0
        cart.forEach((item)=>{
            totalPrice +=item.price * item.count
        })
        return totalPrice
    }

   function todoDelete(item){
       console.log(item.id)
   }
   if (cart.length == 0){
       return(
        <div className="cart">
        <div className="container">
            <div className="cart__products">
                <h2 className="cart__title">Корзина</h2>
                <div className="wrapper">
                    <p className="cart__empty">Ваша корзина пуста</p>
                    <NavLink className="cart__link" to='/catalog' >Перейти к покупкам</NavLink>
                </div>
            </div>
        </div>
    </div>    
       )
   }else{
    return(
        <div className="cart">
            <div className="container">
                <div className="cart__products">
                    <h2 className="cart__title">Корзина</h2>
                        <hr className="line__top"/>
                        {cart.map((item, index)=>{
                            return(
                                <div key={index} className="cart__product">
                                    <p className="cart__product__title">{item.title}</p>
                                    <div className="cart__item__img">
                                        <img src={item.picture} alt={item.title}/>
                                    </div>
                                    <p className="cart__item__count">{item.count}</p>
                                    <p className="cart__item__price" >{item.price * item.count}р.</p>
                                    <div className="cart__caption__btn" onClick={()=>{todoDelete(item)}} id={item.id}><img src="./image/delete.png" alt="delite"/></div> 
                                </div>
                            )
                        })}
                        <hr className="line__bottom"/>
                        <div className="cart_total__price">
                            <h2 className="price">Общая стоимость: {getTotalPrice()} р.</h2> 
                        </div>
                </div>
            </div>
        </div>    
    )
}}

export default Cart