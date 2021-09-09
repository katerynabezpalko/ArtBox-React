import './MainPage.css';
import { Link } from "react-router-dom";
import arrow_right from '../img/arrow_right.png';
import main1 from '../img/main1.png';
import main2 from '../img/main2.png';
import mainpage_mc1 from '../img/mainpage_mc1.png';
import mainpage_mc2 from '../img/mainpage_mc2.png';

function MainPage() {

    return (
        <>
            <div className="main_page_banner">
                <div className="left_block">
                    <img src={main1} className="banner_main_page" alt="master-classes"/>
                    <div className="text_container">
                        <div className="title">Выездные творческие <br/> мастер-классы</div>
                        <div className="description">
                            Организуем творческую активность <br/> на мероприятии любого масштаба
                        </div>
                        <Link to={'/master-class'} className="button_main_page">
                            Узнать подробнее
                        </Link>
                    </div>
                </div>
                <div className="right_block">
                    <img src={main2} className="banner_main_page" alt="materials"/>
                    <div className="text_container">
                        <div className="title">Полный комплект <br/> материалов</div>
                        <div className="description">
                            Всенеобходимые материалы <br/> для творчества в компактном боксе
                        </div>
                        <Link to={'/catalog'} className="button_main_page">В каталог</Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="master_classes_title">
                    <div className="master_classes">Мастер-классы</div>
                    <Link to={'/master-class'} className="switch_to_master_classes">
                        Смотреть мастер-классы
                        <img src={arrow_right} alt="arrow"/>
                    </Link>
                </div>
                <div className="master_class_part">
                    <div className="banner_cover">
                        <img src={mainpage_mc1} className="banner1" alt="banner_master_class"/>
                        <div className="banner_text">
                            <div className="banner_title">
                                Выездные творческие мастер-классы
                            </div>
                            <div className="banner_description">
                                Организуем творческую активность на <br/>
                                мероприятии любого масштаба
                            </div>
                            <Link to={'/catalog'} className="banner_button">В каталог</Link>
                        </div>
                    </div>
                    <img src={mainpage_mc2} className="banner2" alt="banner_master_class"/>
                </div>
            </div>
        </>
    )
}

export default MainPage;