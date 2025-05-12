import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import React from "react";
import Page from "../../components/page/Page";

import img from "../../_assets/images/yonghyun-lee.jpg"

export default function NotFoundPage(): React.JSX.Element {

    const { contentWrapper, errorWrapper, messageStyles, numberStyles, imageWrapper, imageStyles, gradientHelper } = useStyles();

    return (
        <Page documentTitle="Hups..">
            <div className={contentWrapper}>
                <div className={errorWrapper}>
                    <div className={mergeClasses(messageStyles, numberStyles)} style={{ backgroundImage: img }}>
                        <strong>404</strong>
                    </div>
                </div>
            </div>
            <div className={imageWrapper}>
                <img
                    className={imageStyles}
                    src={img}
                    alt="Picture of a park by Yonghun Lee" />
                <div className={gradientHelper} />
            </div>
        </Page>
    );
}

const useStyles = makeStyles({
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        minHeight: "250px",
        zIndex: 1,
    },
    errorWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "500px",
        gap: "1rem"
    },
    messageStyles: {
        textWrap: "wrap",
        lineHeight: "50px"
    },
    numberStyles: {
        fontSize: "9rem",
        fontWeight: tokens.fontWeightBold,
        marginRight: "1rem",
    },
    imageWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
    },
    imageStyles: {
        objectFit: "cover",
        opacity: 0.3,
        filter: "grayscale(100%) blur(1vh)",
        width: "100vw",
        height: "100vh",
    },
    gradientHelper: {
        position: "absolute",
        minHeight: "100%",
        width: "100%",
        top: 0,
        left: 0,
        background: `radial-gradient(ellipse at top left, ${tokens.colorNeutralBackground2} 45%, transparent 55%)`
    }
})