import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Navigation from "../navigation/Navigation";
import PageProperties from "./PageProperties";

export default function Page(properties: React.PropsWithChildren<PageProperties>): React.JSX.Element {

    const { pageWrapper, contentWrapper } = useStyles();

    React.useEffect(() => {
        document.title = properties.docTitle ?? properties.pageTitle;
    }, [properties.docTitle]);

    return (
        <div className={pageWrapper}>
            <Navigation extensionNode={properties.navExtensionNode ?? null} />
            <div className={contentWrapper}>
                <h1>{properties.pageTitle}</h1>
                {/** ONLY FOR TESTING */}
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
    contentWrapper: {
        width: "100%",
        maxWidth: "1440px",
        flexGrow: 1,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        zIndex: 1,
        paddingTop: "2rem",
    }
})