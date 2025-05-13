import React from "react";
import Carousel from "../Carousel";
import ImageCard from "../../card/image-card/ImageCard";


import testImg from "../../../_assets/images/yonghyun-lee.jpg"

export default function ProductCarousel(): React.JSX.Element {

    const slides = React.useMemo<React.JSX.Element[]>(() => {
        const slides = [];
        for (let i = 0; i <= 3; i++) {
            slides.push(
                <ImageCard
                    image={testImg}
                    onClick={() => console.log("sup!")}
                />
            )
        }
        return slides;
    }, [])

    return (
        <Carousel
            slides={slides}
        />
    )
}