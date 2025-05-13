import { Card as FluentCard, makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import CardProperties from "./CardProperties";

//Probably too generic to be useful
export default function Card(properties: CardProperties): React.JSX.Element {

    const { cardBaseStyles } = useStyles();

    return (
        <FluentCard className={mergeClasses(properties.className, cardBaseStyles)}>
            {properties.header}
            {properties.preview}
            {properties.footer}
        </FluentCard>
    );
}

const useStyles = makeStyles({
    cardBaseStyles: {
        backgroundColor: tokens.colorNeutralBackground1,
        borderRadius: tokens.borderRadiusLarge
    }
});