import React from "react";
import Slider from "react-slick";
import cls from "./MyCarousel.module.scss";


 const MyCarousel = () => {

    const SampleNextArrow = (props) => {

        const {className, style, onClick} = props;

        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "#09b024",
                    position: "absolute",
                    right: "10px",
                    zIndex: "1"
                }}
                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (props) => {

        const {className, style, onClick} = props;

        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "#09b024",
                    position: "absolute",
                    left: "10px",
                    zIndex: "1"
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
        <div className={cls.carouselInner}>
            <Slider {...settings}>
                <div>
                    <h3 className={cls.carousel}><img className={cls.image} src="img/carousel/puma2.webp"
                                                      alt="puma"/></h3>
                </div>
                <div>
                    <h3 className={cls.carousel}><img className={cls.image} src="img/carousel/adidas1.jpg"
                                                      alt="adidas"/></h3>
                </div>
                <div>
                    <h3 className={cls.carousel}><img className={cls.image} src="img/carousel/puma.webp"
                                                      alt="puma"/></h3>
                </div>
                <div>
                    <h3 className={cls.carousel}><img className={cls.image} src="img/carousel/shoes.jpg"
                                                      alt="shoes"/></h3>
                </div>
                <div>
                    <h3 className={cls.carousel}><img className={cls.image} src="img/carousel/adidas.jpg"
                                                      alt="adidas"/></h3>
                </div>
            </Slider>
        </div>
    );
}

export  default MyCarousel;
