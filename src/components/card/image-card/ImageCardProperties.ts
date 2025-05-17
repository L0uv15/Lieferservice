import { CardPreviewProps } from "@fluentui/react-components";

type ImageCardProperties = Pick<CardPreviewProps, "logo" | "onClick"> & {
    image: string
}

export default ImageCardProperties;