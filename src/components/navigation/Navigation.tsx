import { makeStyles, tokens } from "@fluentui/react-components";
import NavigationProperties from "./NavigationProperties";


export default function Navigation(properties: NavigationProperties): React.JSX.Element {

    const { navigationWrapper, navigationNonExtensionWrapper } = useStyles();

    return (
        <div className={navigationWrapper}>
            <div className={navigationNonExtensionWrapper}>
            </div>

            <div>
                {properties.extensionNode}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    navigationWrapper: {
        width: "100%",
        height: "3rem",
        maxHeight: "3rem",
        textAlign: "center",
        backgroundColor: "red",
        padding: `0 ${tokens.spacingHorizontalXXS}`,
    },
    navigationNonExtensionWrapper: {
        width: "100%",
        minHeight: "100%",
        textAlign: "left",
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: "100%",
    }
})
