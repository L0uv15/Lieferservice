import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Button from "../Button";
import CarouselBorderButtonProperties from "./CarouselBorderButtonProperties";

export default function CarouselBorderButton(properties: React.PropsWithChildren<CarouselBorderButtonProperties>): React.JSX.Element {

    const { borderButtonStyles } = useStyles();

    return (
        <Button
            appearance="secondary"
            className={borderButtonStyles}
            onClick={properties.onClick}
        >
            {properties.children}
        </Button>
    )
}

//TODO: sollte ggf. in die Anwedung (Carousel.tsx) ausgelagert werden
const useStyles = makeStyles({
    borderButtonStyles: {
        height: "5vh",
        width: "5vh",
        minHeight: "35px",
        minWidth: "35px",
        borderRadius: tokens.borderRadiusCircular
    }
})