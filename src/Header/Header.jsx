import './Header.css'

function Header() {
    return(
        <div className="header_container">
            <div className="navbar_left">
                <img src={"logo_header.png"} alt="logo"/>
                <div className="navbar_panel">
                    <div className="navbar_item">Главная</div>
                    <div className="navbar_item">Наборы</div>
                    <div className="navbar_item">Мастер-классы</div>
                    <div className="navbar_item">Оплата</div>
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

export default Header