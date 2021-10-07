import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="nav__link">
          <NavLink to='/homepage'>Главная</NavLink>
          <NavLink to='/news'>Новости</NavLink>
          <NavLink to='/catalog'>Каталог</NavLink>
          <NavLink to='/about'>О нас</NavLink>
        </nav>
    )        
}

export default Nav