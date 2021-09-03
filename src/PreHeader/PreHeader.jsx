import './PreHeader.css';

function PreHeader(){

    return (
        <div className="pre_header">
            <div className="navbar">
                <div className="navbar_items">
                    <div className="item">Для кого</div>
                    <img src="https://via.placeholder.com/12x6" className="arrow_img" alt="arrow"/>
                </div>
                <div className="navbar_items">
                    <div className="item">По тематике</div>
                    <img src="https://via.placeholder.com/12x6" className="arrow_img" alt="arrow"/>
                </div>
                <div className="navbar_items">
                    <div className="item">По направлению</div>
                    <img src="https://via.placeholder.com/12x6" className="arrow_img" alt="arrow"/>
                </div>
            </div>
            <div className="master_class_navbar">
                <div>Заказать мастер-класс</div>
            </div>
        </div>
    )
}

export default PreHeader;