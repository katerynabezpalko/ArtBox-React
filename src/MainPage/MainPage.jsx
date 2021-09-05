import './MainPage.css'

function MainPage() {

    return (
        <div className="main_page_block">
            <div className="left_block">
                <img src={"main1.png"} alt="master-classes"/>
                <div className="text_container">
                    <div className="header_container">Выездные творческие мастер-классы</div>
                    <div className="description_container">Организуем творческую активность на мероприятии любого масштаба</div>
                    <button className="button_container">Узнать подробнее</button>
                </div>
            </div>
            <div className="right_block">
                <img src={"main2.png"} alt="materials"/>
                <div className="text_container">
                    <div className="header_container">Полный комплект материалов</div>
                    <div className="description_container">Всенеобходимые материалы для творчества в компактном боксе</div>
                    <button className="button_container">В каталог</button>
                </div>
            </div>
            
        </div>
    )
}

export default MainPage;