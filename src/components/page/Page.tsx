import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Navigation from "../navigation/Navigation";
import PageProperties from "./PageProperties";

export default function Page(properties: React.PropsWithChildren<PageProperties>): React.JSX.Element {

    const { pageWrapper, contentWrapper, pageTitleStyles, pageHeadExtensionWrapper } = useStyles();

    React.useEffect(() => {
        document.title = properties.documentTitle ?? `ParkDrink - ${properties.title}`;
    }, [properties.documentTitle, properties.title]);

    return (
        <div className={pageWrapper}>
            <Navigation extensionNode={properties.navExtensionNode ?? null} />
            {properties.pageHeadExtensionNode
                ? <div className={pageHeadExtensionWrapper}>{properties.pageHeadExtensionNode}</div>
                : null
            }
            <div className={contentWrapper}>
                <h1 className={pageTitleStyles}>{properties.title ?? ""}</h1>
                {properties.children}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    pageWrapper: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: tokens.colorNeutralBackground2,
        position: "relative",
        overflowX: "hidden",
        margin: 0,
    },
    pageHeadExtensionWrapper: {
        minWidth: "100%",
        height: "min-content",
        marginTop: "1rem"
    },
    contentWrapper: {
        width: "90%",
        maxWidth: "1440px",
        flexGrow: 1,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        zIndex: 1,
        paddingTop: "2rem",
    },
    pageTitleStyles: {
        marginBottom: "1rem",
        fontSize: tokens.fontSizeHero700,
        fontWeight: tokens.fontWeightBold,
    }
})