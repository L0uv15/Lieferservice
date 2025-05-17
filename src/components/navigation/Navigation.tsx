import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import NavigationProperties from "./NavigationProperties";


export default function Navigation(properties: NavigationProperties): React.JSX.Element {

    const { navigationWrapper, navigationNonExtensionWrapper } = useStyles();
    const navigate = useNavigate()

    return (
        <div className={navigationWrapper}>
            <div className={navigationNonExtensionWrapper}>


                {/** ONLY FOR TESTING */}
                <div>
                    <Button
                        appearance="transparent"
                        size="small"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        Home
                    </Button>

                    <Button
                        appearance="transparent"
                        size="small"
                        onClick={() => {
                            navigate("/auth")
                        }}
                    >
                        Auth
                    </Button>

                    <Button
                        appearance="transparent"
                        size="small"
                        onClick={() => {
                            navigate("/99789/98237219087389012_32123")
                        }}
                    >
                        NotFound
                    </Button>
                </div>
                {/** ONLY FOR TESTING */}

                <div>
                    
                </div>
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
        zIndex: 1000,
        position: "sticky"
    },
    navigationNonExtensionWrapper: {
        width: "100%",
        minHeight: "100%",
        textAlign: "left",
        backgroundColor: tokens.colorNeutralBackground1,
        boxShadow: tokens.shadow4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: "100%",
        padding: `0 ${tokens.spacingHorizontalXXS}`,
    }
})
