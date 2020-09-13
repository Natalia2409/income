import React from 'react';
import './categories.css';
import food from '../img/food.png';
import car from '../img/car.png';
import cafe from '../img/cafe.png';
import transport from '../img/bus.png';
import hygiene from '../img/toothbrush.png';
import sport from '../img/muscle.png';
import health from '../img/medicine.png';
import beer from '../img/beer.png';
import taxi from '../img/taxi.png';
import clothes from '../img/clothes.png';
import home from '../img/property.png';
import phone from '../img/telephone.png';
import gift from '../img/gift.png';
import pet from '../img/dog.png';

const Categories = () => {
    return (
        <div className="choose">
            <div className="categories">
                <button><img alt="food" src={food}/></button>
                <button><img alt="car" src={car}/></button>
                <button><img alt="cafe" src={cafe}/></button>
                <button><img alt="transport" src={transport}/></button>
            </div>
            <div className="categories">
            <div className="raw">
                <button><img alt="hygiene" src={hygiene}/></button>
                <button><img alt="sport" src={sport}/></button>
                <button><img alt="health" src={health}/></button>
            </div>
            <div className="cash">
                <button><div>
                        1000uah<br/>
                        <span>500uah</span>
                    </div></button>
            </div>
            <div className="raw">
                <button><img alt="beer" src={beer}/></button>
                <button><img alt="taxi" src={taxi}/></button>
                <button><img alt="clothes" src={clothes}/></button>
            </div>
        </div>
        <div className="categories">
            <button><img alt="home" src={home}/></button>
            <button><img alt="phone" src={phone}/></button>
            <button><img alt="gift" src={gift}/></button>
            <button><img alt="pet" src={pet}/></button>
        </div>
    </div>
    )
}

export default Categories;