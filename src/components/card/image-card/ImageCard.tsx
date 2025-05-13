import { CardPreview, makeStyles } from "@fluentui/react-components";
import React from "react";
import Card from "../Card";
import ImageCardProperties from "./ImageCardProperties";

export default function ImageCard(properties: ImageCardProperties): React.JSX.Element {

    const { previewStyles, imageStyles } = useStyles();

    const previewNode = React.useMemo<React.JSX.Element>(() => {
        return (
            <CardPreview
                logo={properties.logo}
                className={previewStyles}
                onClick={properties.onClick}
            >
                <img 
                    src={properties.image}
                    className={imageStyles}
                />
            </CardPreview>
        )
    }, [properties.logo, properties.image])

    return (
        <Card
            footer={null}
            header={null}
            preview={previewNode}
        />
    )
}

const useStyles = makeStyles({
    previewStyles: {
        height: "20vh",
        minHeight: "100px",
        maxHeight: "250px",
        aspectRatio: "2/1",
        border: "1px solid red"
    },
    imageStyles: {
        minWidth: "100%",
        minHeight: "100%",
    }
})