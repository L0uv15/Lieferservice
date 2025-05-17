import { Button as FluentButton, makeStyles, mergeClasses } from "@fluentui/react-components"
import ButtonProperties from "./ButtonProperties"



export default function Button(properties: React.PropsWithChildren<ButtonProperties>): React.JSX.Element {

    const { buttonStyles } = useStyles();

    return (
        <FluentButton
            appearance={properties.appearance ?? "secondary"}
            className={mergeClasses(buttonStyles, properties.className)}
            icon={properties.icon ?? null}
            iconPosition={properties.iconPosition ?? "after"}
            shape={properties.shape ?? "rounded"}
            size={properties.size ?? "medium"}
            as={properties.as ?? "button"}
        >
            {properties.children}
        </FluentButton>
    )
}

const useStyles = makeStyles({
    buttonStyles: {
        
    }
})