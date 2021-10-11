import React from "react";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { NavLink } from "react-router-dom";

function HomePage  (){

    const contentStyle1 = {
        height: '550px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'url("./image/carousel4.jpg") 100% 5%/cover no-repeat'
    };
    const contentStyle2 = {
        height: '550px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'url("./image/carousel1.jpg")  100%  50% /cover no-repeat',
        position: 'relative'
    };
    const contentStyle3 = {
        height: '550px',
        width:'100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'url("./image/carousel2.jpg") 100% 5% /cover no-repeat',
    };
    const contentStyle4 = {
        height: '550px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'url("./image/carousel3.jpg") 100% 18% /cover no-repeat'
    };

    return (
        <main className="home">
            <div className="carousel">
                <Carousel  autoplay className="carousel__ant">
                    <div>
                        <h3 className="carousel__ant__item"style={contentStyle1}>
                            <div className="carousel__ant__item_slogon">
                                <h2 className="carousel__ant__item_slogon__title">Игры для PS4</h2>
                                <p>Откройте для себя целое поколение игр, получивших признание критиков, в числе которых выдающиеся эксклюзивы от студий PlayStation Studios.</p>
                            </div>
                        </h3>
                    </div>
                    <div>
                        <h3 className="carousel__ant__item" style={contentStyle2}>
                            <NavLink to='/catalog' className="carousel__ant__item__btn btn_1">Уже в продаже</NavLink>
                        </h3>
                    </div>
                    <div>
                        <h3  className="carousel__ant__item"style={contentStyle3}>
                            <NavLink to='/catalog' className="carousel__ant__item__btn btn_2">Уже в продаже</NavLink>
                        </h3>
                    </div>
                    <div>
                        <h3 className="carousel__ant__item"style={contentStyle4}>
                            <NavLink to='/catalog' className="carousel__ant__item__btn btn_3">Уже в продаже</NavLink>
                        </h3>
                    </div>
                   
                </Carousel>
            </div>
            <div className="home__item1">
                <div className="container">
                    <div className="wrapper__item1">
                        <div className="home__item1__title">
                            <h2>Невероятные игры и развлечения без границ</h2>
                            <p>Консоль PS4 предлагает игрокам потрясающую игровую мощь, невероятные развлечения и прекрасную технологию HDR1.</p>
                        </div>
                        <div className="home__item1__description">
                            <div className="home__item1__description__wrapper">
                                <h3>Больше способов для игры</h3>
                                <p> Храните свои игры, приложения, картинки и видео на консолях PS4 с жестким диском до 1 Тб – эти модели легче и компактнее оригинальных PS4, а также доступны в различных расцветках, среди которых "Антрацитовый черный" и другие.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__item2">
                <div className="container">
                    <div className="wrapper__item2">
                        <div className="home__item2__title">
                            <h2>Играйте на PlayStation</h2>
                            <p>Ведите свой отряд в бой, выиграйте на мировом чемпионате  и проложите путь к королевской победе. Вас ждут самые популярные и лучшие игры, доступные на PS4 миллионам игроков по всему миру.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage