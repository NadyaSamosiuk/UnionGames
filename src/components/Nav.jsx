import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
      <nav className="nav">
        <button className="nav_toggle"><label for="nav_toggle"></label></button>
        <input type="checkbox"  id="nav_toggle"/>
            <ul>
              <li className="nav_item"><NavLink className="nav__link" to='/home'>Главная</NavLink></li>
              <li className="nav_item"><NavLink className="nav__link" to='/news'>Новости</NavLink></li>
              <li className="nav_item"><NavLink className="nav__link" to='/catalog'>Каталог</NavLink></li>
              <li className="nav_item"> <NavLink className="nav__link" to='/about'>О нас</NavLink></li>
            </ul>
      </nav>
    )        
}

export default Nav