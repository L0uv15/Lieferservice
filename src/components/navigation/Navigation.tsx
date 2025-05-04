import { makeStyles } from "@fluentui/react-components";
import NavigationProperties from "./NavigationProperties";

export default function Navigation(properties: NavigationProperties): React.JSX.Element {

    const { navigationWrapper } = useStyles();

    return (
        <div className={navigationWrapper}>
            -- Navigation --

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
        textAlign: "center",
        backgroundColor: "red",
    }
})
