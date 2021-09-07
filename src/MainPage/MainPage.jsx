import './MainPage.css'
import { Link } from "react-router-dom"

function MainPage() {

    return (
        <>
            <div className="main_page_banner">
                <div className="left_block">
                    <img src={"main1.png"} className="banner_main_page" alt="master-classes"/>
                    <div className="text_container">
                        <div className="title">Выездные творческие мастер-классы</div>
                        <div className="description">
                            Организуем творческую активность на мероприятии любого масштаба
                        </div>
                        <Link to={'/master-class'} className="button_main_page">
                            Узнать подробнее
                        </Link>
                    </div>
                </div>
                <div className="right_block">
                    <img src={"main2.png"} className="banner_main_page" alt="materials"/>
                    <div className="text_container">
                        <div className="title">Полный комплект материалов</div>
                        <div className="description">
                            Всенеобходимые материалы для творчества в компактном боксе
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
                        <img src={"right_arrow.png"} alt="arrow"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MainPage;