import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return ( 
        <Carousel {...settings}>
            <Wrap>
                <img src="images/slider-badag.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="images/slider-badging.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="images/slider-scale.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="images/slider-scales.jpg" alt=""/>
            </Wrap>
        </Carousel>
     );
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 90px;

    .slick-list {
        overflow: visible;
    }

    ul li button {
        &::before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: #fff;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        @media screen and (min-width: 280px) and (max-width: 375px) {
            width: 100%;
            height: 17vh;
            object-fit: fill;
        }
        
        &:hover {
            border-color: rgba(249, 249, 249, 0.8);
        }
    }

`