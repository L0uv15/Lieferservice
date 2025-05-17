import React from "react";
import Carousel from "../Carousel";
import ImageCard from "../../card/image-card/ImageCard";
import { makeStyles, tokens } from "@fluentui/react-components";


export default function ProductCarousel(): React.JSX.Element {

    const { slideStyles, carouselWrapper } = useStyles();

    const slides = React.useMemo<React.JSX.Element[]>(() => {
        const slides = [];
        for (let i = 0; i <= 3; i++) {
            slides.push(
                <div className={slideStyles}>
                    {i}
                </div>
            )
        }
        return slides;
    }, []);

    return (
        <div className={carouselWrapper}>
            <Carousel
                slides={slides}
                options={{ loop: true }}

            />
        </div>

    )
}

const useStyles = makeStyles({
    slideStyles: {
        transform: "translate3d(0, 0, 0)",
        flex: "0 0 40%",
        minWidth: 0,
        marginLeft: "1vw",
        border: "1px solid black",
        height: "18vh",
    },
    carouselWrapper: {
        padding: "2vh",
        backgroundColor: tokens.colorNeutralBackground1, //looks like shit
        boxShadow: tokens.shadow4Brand
    }
})