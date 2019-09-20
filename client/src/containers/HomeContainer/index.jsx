import React from 'react';
import {Link} from 'react-router-dom';
 
import {
    CardMenuWrapper,
    CardMenuItem,
    CardMenuTitle,
    CardMenuSubtitle,
    CardMenuImg,
    CardMenuText
} from './components/styles/CardMenu';

import Jumbotron from './components/Jumbotron';

const HomeContainer = () => {
    return (
        <div>
            <Jumbotron />
            <CardMenuWrapper>
                <div>
                    <CardMenuTitle>Все об автомобилях</CardMenuTitle>
                    <CardMenuItem>
                        <Link to="/allcars">
                            <CardMenuImg src="/images/all-about-cars.jpg" />
                            <CardMenuSubtitle>Авто — лучший друг человека</CardMenuSubtitle>
                        </Link>
                        <CardMenuText>
                            Автомобили являются самым величайшим достижением высоких технологий. 
                            В одной металлической коробочке скрывается плод стараний сотен дизайнеров, 
                            инженеров, история, мощь и вкус
                        </CardMenuText>
                    </CardMenuItem>
                </div>

                <div>
                    <CardMenuTitle>Интересные факты</CardMenuTitle>
                    <CardMenuItem>
                        <Link to="/facts">
                            <CardMenuImg src="/images/facts-about-car.jpeg" />
                            <CardMenuSubtitle>Интересные факты об авто</CardMenuSubtitle>
                        </Link>
                        <CardMenuText>
                            Автомобили такие, какими мы привыкли их видеть на улицах городов, 
                            были  сделаны всего несколько десятков лет назад. А история изобретения
                            автомобиля насчитывает несколько сотен лет
                        </CardMenuText>
                    </CardMenuItem>
                </div>

                <div>
                    <CardMenuTitle>Обзоры автомобилей</CardMenuTitle>
                    <CardMenuItem>
                        <Link to="/facts">
                            <CardMenuImg src="/images/car-reviews.jpg" />
                            <CardMenuSubtitle>Самые популярные марки</CardMenuSubtitle>
                        </Link>
                        <CardMenuText>
                            На вопрос «какая самая лучшая марка автомобиля?» нет ответа! 
                            У каждого автолюбителя свои вкусы, предпочтения и восможности. 
                            А какой автомобиль нравится вам?
                        </CardMenuText>
                    </CardMenuItem>
                </div>
            </CardMenuWrapper>
        </div>
    );
}

export default HomeContainer;