import { makeStyles } from "@fluentui/react-components";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import CarouselProperties from "./CarouselProperties";
import CarouselBorderButton from "../button/carousel-border-button/CarouselBorderButton";

export default function Carousel(properties: CarouselProperties): React.JSX.Element {

    const { slides, options, enableBorderingButtons } = properties;
    const [carouselRef] = useEmblaCarousel(options);
    const { carouselWrapper, contentWrapper } = useStyles();


    return (
        <div className={carouselWrapper} ref={carouselRef}>
            {enableBorderingButtons
                ? <CarouselBorderButton />
                : null
            }
            <div className={contentWrapper}>
                {slides.map((s, i) => {
                    return <React.Fragment key={i}>{s}</React.Fragment>;
                })}
            </div>
            {enableBorderingButtons
                ? <CarouselBorderButton />
                : null
            }
        </div>
    )
}

const useStyles = makeStyles({
    carouselWrapper: {
        minWidth: "100%",
        overflow: "hidden",
    },
    contentWrapper: {
        display: "flex",
        touchAction: "pan-y pinch-zoom",
    }
})