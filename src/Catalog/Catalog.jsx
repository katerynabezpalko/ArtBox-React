import './Catalog.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import catalog_slider from "../img/catalog_slider.png";

function Catalog(){

    return(
        <div>
            <Carousel infiniteLoop={true} showThumbs={false} showIndicators={false} dynamicHeight={true}>
                <div>
                    <img src={catalog_slider} />
                </div>
                <div>
                    <img src={catalog_slider} />
                </div>
                <div>
                    <img src={catalog_slider} />
                </div>
            </Carousel>
        </div>
    )
}

export default Catalog;