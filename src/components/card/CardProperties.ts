import { CardProps } from "@fluentui/react-components";

type CardProperties = {
    header: React.JSX.Element | null,
    preview: React.JSX.Element | null,
    footer: React.JSX.Element | null 
} & Pick<CardProps, "className">

export default CardProperties;