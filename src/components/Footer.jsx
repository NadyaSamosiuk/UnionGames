import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_poster"></div>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <NavLink to='/homepage'><img className="footer__logo__icon" src='./image/logo.png' alt="logo"/><span>UnionGames</span></NavLink>
                    </div>
                    <div className="footer__nav">
                        <div className="footer__nav__link">
                            <NavLink to='/homepage'>Главная </NavLink>
                            <NavLink to='/news'>{'\u00B7'} Новости </NavLink>
                            <NavLink to='/catalog'>{'\u00B7'} Каталог </NavLink>
                            <NavLink to='/about'>{'\u00B7'} О нас</NavLink>
                        </div>
                    </div>
                    <div className="footer__social">
                        <a href='#'><img className="footer__social__facebook" src="./image/facebook.svg" alt="facebook"/></a>
                        <a href='#'><img className="footer__social__youtube" src="./image/youtube.svg" alt="youtube"/></a>
                        <a href='#'><img className="footer__social__instagram" src="./image/instagram.svg" alt="instagram"/></a>
                    </div>
                </div>
          </div>
        </footer>
    )        
}

export default Footer