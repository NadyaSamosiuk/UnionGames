import React from "react";


const About = () => {
    return (
        <div className="about">
            <div className="about__description">
                <div className="about__description__wrapper">
                    <div className="container">
                        <h2 className="about__description__title">О нас</h2>
                        <h3 className="about__description__subtitle">Вас приветствует коллектив компани «UnionGames»!</h3>
                    </div>
                </div>
                <div className="container">
                    <p className="about__description__content">
                        В нашем специализированном магазине игр для PS4 Вашему вниманию представлен  ассортимент товаров, который ориентирован на любителей видеоигр!
                    </p>
                    <p className="about__description__content">
                        UnionGames – динамично развивающаяся компания с молодой и амбициозной командой сотрудников.
                    </p> 
                    <p className="about__description__content">
                        Благодаря профессионализму сотрудников, качественной продукции и высококлассному сервису в своей повседневной деятельности мы не гонимся за сиюминутной выгодой. Мы стремимся к взаимовыгодным и, конечно же, долгосрочным отношениям с нашими клиентами и партнерами.
                    </p>
                    <p className="about__description__content">
                        Наши сотрудники всегда в курсе о новинках игровой индустрии, чувствуют пульс времени! Поэтому предлагаемый нашим магазином товар постоянно проходит тщательный отбор и проверку. Мы выбираем для своих клиентов только самое лучшее, только самое передовое и только самое перспективное.
                    </p>  
                    <p className="about__description__content">
                        Мы являемся интернет-магазином и наша задача - внедрять и развивать этот современный и перспективный вид сервиса.
                    </p>
                    <p className="about__description__content">
                        Основная задача нашей команды – создание максимально комфортных условий для клиента в приобретении товаров, консультации по эксплуатации и дальнейшему техническому сопровождению.
                    </p>
                    <p className="about__description__content">
                        Наши приоритеты в работе - низкая цена, наличие товара на складе, своевременная бесплатная доставка, удобный сервис при выборе и покупке!
                    </p>
                    <p className="about__description__content">
                        Мы с радостью готовы ответить на все Ваши вопросы!
                    </p>
                    <div className="about__description__tel">
                        <h3>Контактный телефон:</h3>
                        <a  href="tel:+37529775-75-75">+375(29)775-75-75</a>
                    </div>
                    <div className="about__description__contact">
                        <h3 className="about__description__contact__title">Магазин в Минске:</h3>
                        <ul>
                            <li>Пр. Независимости д.58</li>
                            <li>ТЦ Московско-Венский пав. 204</li>
                            <li>ПН-СБ: 10:00 - 20:00</li>
                            <li>ВС: 11:00 - 19:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about__description__map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af304a71c0a43c91f63a581924b5ea4dff96e64f2d77ba7608af808af3814bf87&amp;source=constructor" width="600" height="500" frameborder="0"></iframe>
            </div>       
        </div>
    )        
}

export default About