import './Header.css';
import { Link } from "react-router-dom";
import logo_header from '../img/logo_header.png';


function Header() {
    return(
        <div className="header_container">
            <div className="navbar_left">
                <img src={logo_header} alt="logo"/>
                <div className="navbar_panel">
                    <div className="navbar_item">
                        <Link className="link" to={'/home'}>Главная</Link>
                    </div>
                    <div className="navbar_item">Наборы</div>
                    <div className="navbar_item">Мастер-классы</div>
                    <div className="navbar_item">Оплата и доставка</div>
                    <div className="navbar_item">Блог</div>
                </div>
            </div>
            <div className="navbar_right">
                <div className="tel_number">
                    <i className="fas fa-phone"/>
                    <div className="navbar_item">+7 995 505 03 35</div>
                </div>
                <div className="button_group">
                    <button className="button personal_area">
                        <i className="fas fa-user-circle"/>
                    </button>
                    <button className="button basket">
                        <i className="fas fa-shopping-cart"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;