import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import React from "react";
import Page from "../../components/page/Page";

import { useNavigate } from "react-router-dom";
import img from "../../_assets/images/yonghyun-lee.jpg";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import useToastContext from "../../context/toast/useToastContext";
import generateHomeRootPath from "../../router/misc/home/generators/generateHomeRootPath";

export default function NotFoundPage(): React.JSX.Element {

    const { contentWrapper, errorWrapper, messageStyles, numberStyles, imageWrapper, imageStyles, gradientHelper } = useStyles();
    const { dispatchError } = useToastContext();
    const navigate = useNavigate();

    const [timeVal, setTimeVal] = React.useState<number>(5000)

    React.useEffect(() => {
        const id = setInterval(() => {
            if (timeVal === 5000) dispatchError({ primaryContent: "Diese Seite scheint nicht zu existieren. Wir leiten dich um!" })
            if (timeVal > 0) {
                setTimeVal((prev) => prev - 100)
            } else {
                navigate(generateHomeRootPath());
            };
        }, 100);
        return () => {
            clearInterval(id);
        };
    }, [timeVal, navigate, dispatchError]);

    return (
        <Page
            documentTitle="ParkDrink - Hups.."
            navExtensionNode={<ProgressBar max={5000} value={timeVal} />}
        >
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