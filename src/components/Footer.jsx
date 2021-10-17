import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_poster"> </div>
            <div className="footer__container"> 
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__logo">
                            <NavLink to='/home'><img className="footer__logo__icon" src='./image/logo.png' alt="logo"/><span>UnionGames</span></NavLink>
                        </div>
                        <div className="footer__nav">
                            <div className="footer__nav__link">
                                <NavLink to='/home'>Главная </NavLink>
                                <NavLink to='/news'>Новости </NavLink>
                                <NavLink to='/catalog'>Каталог </NavLink>
                                <NavLink to='/about'>О нас</NavLink>
                            </div>
                        </div>
                        <div className="footer__contact">
                            <h3 className="footer__contact__title">Магазин в Минске:</h3>
                            <ul>
                                <li>Пр. Независимости д.58</li>
                                <li>ТЦ Московско-Венский пав. 204</li>
                                <li>ПН-СБ: 10:00 - 20:00</li>
                                <li>ВС: 11:00 - 19:00</li>
                            </ul>
                        </div>
                        <div className="footer__social">
                            <div className="footer__social__tel">
                                <h3>Контактный телефон:</h3>
                                <a  href="tel:+37529775-75-75">+375(29)775-75-75</a>
                            </div>
                            <a href='#'><img className="footer__social__facebook" src="./image/facebook.svg" alt="facebook"/></a>
                            <a href='#'><img className="footer__social__youtube" src="./image/youtube.svg" alt="youtube"/></a>
                            <a href='#'><img className="footer__social__instagram" src="./image/instagram.svg" alt="instagram"/></a>
                        </div>
                    </div>
                    <div className="footer__copirait">
                        <h3>© "Uniongame.by" — видеоигры для PS4</h3>
                    </div>
                </div>
            </div>
        </footer>
    )        
}

export default Footer