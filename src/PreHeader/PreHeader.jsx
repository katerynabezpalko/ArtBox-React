import './PreHeader.css';
import { useState } from "react";
import arrow_img from '../img/arrow_img.png';

function PreHeader(){

    let [showMenu, setShowMenu] = useState(false)

    const toggleMenu = function () {
        setShowMenu(!showMenu)
    };

    return (
        <div className="pre_header">
            <div className="navbar">
                <div className="navbar_items">
                    <div className="item_wrapper">
                        <div className="item">Для кого</div>
                        <img src={arrow_img} className="arrow_img" alt="arrow"/>
                    </div>
                </div>
                <div className="navbar_items">
                    <div className="item_wrapper">
                        <div className="item">По тематике</div>
                        <img src={arrow_img} className="arrow_img" alt="arrow"/>
                    </div>
                </div>
                <div className="navbar_items">
                    <div onClick={toggleMenu} className="item_wrapper">
                        <div className="item">По направлению</div>
                        <img src={arrow_img} className="arrow_img" alt="arrow"/>
                    </div>
                    <div className={showMenu ? "hidden_menu hidden_menu_show" : "hidden_menu hidden_menu_hide"}>
                        <div className="hidden_menu_item">Художественные</div>
                        <div className="hidden_menu_item">По декору</div>
                        <div className="hidden_menu_item" >Кулинарные</div>
                    </div>
                </div>
            </div>
            <div className="master_class_navbar">
                <div>Заказать мастер-класс</div>
            </div>
        </div>

    )
}

export default PreHeader;