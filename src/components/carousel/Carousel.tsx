import { makeStyles } from "@fluentui/react-components";
import CarouselProperties from "./CarouselProperties";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

export default function Carousel(properties: CarouselProperties): React.JSX.Element {

    const { slides, options } = properties;
    const [carouselRef] = useEmblaCarousel(options);
    const { carouselWrapper, contentWrapper } = useStyles();


    return (
        <div className={carouselWrapper} ref={carouselRef}>
            <div className={contentWrapper}>
                {slides.map((s, i) => {
                    return <React.Fragment key={i}>{s}</React.Fragment>;
                })}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    carouselWrapper: {
        minWidth: "100%",
        overflow: "hidden",
        border: "1px solid blue"
    },
    contentWrapper: {
        display: "flex",
        touchAction: "pan-y pinch-zoom",
    }
})