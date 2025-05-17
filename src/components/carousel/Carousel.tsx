import { makeStyles } from "@fluentui/react-components";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import CarouselProperties from "./CarouselProperties";


export default function Carousel(properties: CarouselProperties): React.JSX.Element {

    const { slides, options } = properties;
    const [carouselRef] = useEmblaCarousel(options, [Autoplay()]);
    const { componentWrapper, carouselWrapper, contentWrapper } = useStyles();

    return (
        <div className={componentWrapper}>
            <div className={carouselWrapper} ref={carouselRef}>
                <div className={contentWrapper}>
                    {slides.map((s, i) => {
                        return <React.Fragment key={i}>{s}</React.Fragment>;
                    })}
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    componentWrapper: {
        position: "relative"
    },
    carouselWrapper: {
        minWidth: "100%",
        overflow: "hidden",
        position: "relative",
        "&:hover": {
            cursor: "grab"
        }
    },
    contentWrapper: {
        display: "flex",
        touchAction: "pan-y pinch-zoom",
    }
})