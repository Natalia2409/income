import React from 'react';
import './menu.css';
import menu from '../img/menu.png';

const Menu = () => {
    return (
        <div className="menu">
            <div className="line"><button><img alt="menu" src={menu}/></button></div>
            <div className="balance">Balance 500uah</div>
            <div className="line"><button><img alt="menu" src={menu}/></button></div>
        </div>
    )
}

export default Menu;