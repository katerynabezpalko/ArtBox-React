import './Catalog.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import catalog_slider from "../img/catalog_slider.png";
import catalog_item_img1 from "../img/catalog_item_img1.png";
import catalog_item_img2 from "../img/catalog_item_img2.png";
import catalog_item_img3 from "../img/catalog_item_img3.png";

function Catalog(){

    return(
        <>
            <div>
                <Carousel infiniteLoop={true} showThumbs={false} showIndicators={false} dynamicHeight={true}>
                    <div className="slide">
                        <img src={catalog_slider} alt="slider.img"/>
                        <div className="slider_description">
                            <div className="slider_title">Скидка за отзыв 15% на любой совершенный заказ!</div>
                            <div className="slider_information">Оставь отзыв о нас в Инстаграме с указанием хештега
                                #loveartbox и получи уникальный промокод на скидку 15%.</div>
                            <div className="slider_button">В каталог</div>
                        </div>
                    </div>
                    <div>
                        <img src={catalog_slider} alt="slider.img"/>
                    </div>
                    <div>
                        <img src={catalog_slider} alt="slider.img"/>
                    </div>
                </Carousel>
            </div>
            <div className="catalog">
                <div className="sidebar">

                    <div className="sidebar_title">Категории</div>
                        <div className="label_wrapper">
                            <input type="checkbox"/>
                            <label className="label_information">Наборы для творчества</label>
                        </div>
                        <div className="label_wrapper">
                            <input type="checkbox"/>
                            <label className="label_information">Аксессуары для творчества</label>
                        </div>

                    <div className="sidebar_title">По направлению</div>
                        <div className="label_wrapper">
                            <input type="checkbox"/>
                            <label className="label_information">Рисование</label>
                        </div>
                        <div className="label_wrapper">
                            <input type="checkbox"/>
                            <label className="label_information">Абстрактная живопись</label>
                        </div>
                        <div className="label_wrapper">
                            <input type="checkbox"/>
                            <label className="label_information">Плетение</label>
                        </div>
                        <div className="label_wrapper">
                            <input type="checkbox"/>
                            <label className="label_information">Рукоделие</label>
                        </div>

                </div>

                <div className="cards">
                    <div className="card">
                        <img src={catalog_item_img1} alt="item1"/>
                        <div className="card_information">
                            <div className="item_type">Аксессуары</div>
                            <div className="price_wrapper">
                                <div className="item_title">Краска LoveArtB...</div>
                                <div className="price">150₽</div>
                            </div>
                            <button className="button_item">В корзину</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={catalog_item_img2} alt="item1"/>
                        <div className="card_information">
                            <div className="item_type">Аксессуары</div>
                            <div className="item_title">Краска LoveArtB...</div>
                            <button className="button_item">В корзину</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={catalog_item_img3} alt="item1"/>
                        <div className="card_information">
                            <div className="item_type">Аксессуары</div>
                            <div className="item_title">Краска LoveArtB...</div>
                            <button className="button_item">В корзину</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={catalog_item_img1} alt="item1"/>
                        <div className="card_information">
                            <div className="item_type">Аксессуары</div>
                            <div className="item_title">Краска LoveArtB...</div>
                            <button className="button_item">В корзину</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={catalog_item_img2} alt="item1"/>
                        <div className="card_information">
                            <div className="item_type">Аксессуары</div>
                            <div className="item_title">Краска LoveArtB...</div>
                            <button className="button_item">В корзину</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={catalog_item_img3} alt="item1"/>
                        <div className="card_information">
                            <div className="item_type">Аксессуары</div>
                            <div className="item_title">Краска LoveArtB...</div>
                            <button className="button_item">В корзину</button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Catalog;