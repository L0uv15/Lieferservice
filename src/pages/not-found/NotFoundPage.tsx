import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Page from "../../components/page/Page";


export default function NotFoundPage(): React.JSX.Element {

    const { contentWrapper, errorWrapper } = useStyles();

    return (
        <Page title="Hups..">
            <div className={contentWrapper}>
                <div className={errorWrapper}>
                    <h2>Verlaufen?</h2>
                </div>
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
        border: "1px solid blue",
        height: "60vh",
        minHeight: "250px",
    },
    errorWrapper: {
        border: "1px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    messageStyles: {
        marginBottom: "1rem",
        fontSize: tokens.fontSizeHero1000,
        fontWeight: tokens.fontWeightRegular,
        textWrap: "wrap"
    }
})