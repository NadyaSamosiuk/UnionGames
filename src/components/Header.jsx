import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "./Context";
import Nav from "./Nav";

const Header = () => {
   const {cart} = useContext(Context)

   function getCount(){
        let count = 0
        if (cart.length === 0){
           return count
        }else{
           cart.forEach((product)=> {
               count +=product.count
           })
        }
        return count
    }

    return (
        <header className="header ">
            <div className="container">
                <div className="header__item">
                    <div className="header__logo">
                        <NavLink to='/homepage'><img src='./image/logo.png' alt="logo"/><span>UnionGames</span></NavLink>           
                    </div>
                    <Nav/>
                    <div className="header__social__tel">
                            <h3>Контактный телефон:</h3>
                            <a  href="tel:+37529775-75-75">+375(29) 775-75-75</a>
                        </div>
                    <NavLink to='/cart' className="header__cart">
                        <img className="header__widget__cart" src="./image/cart1.png" alt="cart"/><span className="header__cart__count">{getCount()}</span>
                    </NavLink>
                </div>
            </div>
        </header>
    )       
  
}

export default Header